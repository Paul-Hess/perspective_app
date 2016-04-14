import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', this.get('session').get('uid')),
      post: this.store.findRecord('post', params.post_id)
    })
  },
  actions: {
    saveReview3(params) {
      var newReview = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newReview);
      newReview.save().then(function() {
        return post.save();
      });
    },

    saveResponse(params) {
      var newResponse = this.store.createRecord('response', params);
      var post = params.post;
      var user = params.user;
      console.log(params);

      newResponse.save().then(function() {
        user.get('responses').addObject(newResponse);
        post.get('responses').addObject(newResponse);
        user.save();
        return post.save();
      });
    }
  }
});
