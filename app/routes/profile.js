import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

     return Ember.RSVP.hash({
      owner: false,
      currentUser: this.get('session').get('uid'),
      user: this.store.findRecord('user', params.user_id),
      post: this.store.findAll('post'),
      category: this.store.findAll('category')
    }).then(function(model){
      if(model.currentUser === model.user.id) {
        model.owner = true;
      }
      return model;
    });
  },

  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      var user = params.user;

      newPost.save().then(function() {
        user.get('posts').addObject(newPost);
        return user.save();
      });
    }

  }
});
