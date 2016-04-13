import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
    return this.store.findAll('user');
  },
  actions: {
    deletePost(post) {
      post.destroyRecord();
    }
  }
});
