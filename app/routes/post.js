import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    saveReview3(params) {
      var newReview = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newReview);
      newReview.save().then(function() {
        return post.save();
      });
    }
  }
});
