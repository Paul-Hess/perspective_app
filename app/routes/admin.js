import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      post: this.store.findAll('post'),
      user: this.store.findAll('user')
    });

  },
  actions: {
    deletePost(post) {
      post.destroyRecord();
    }
  }
});
