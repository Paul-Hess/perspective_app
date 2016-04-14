import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
    return this.store.findAll('user');
  },
  actions: {
    deletePost(post) {
      post.destroyRecord();
    },

    saveCategory(title) {
    	var newCategory = this.store.createRecord('category', {
    		title: title
    	});
    	if(newCategory.save()) {
    		console.log('saved properly' );
    	}
    }
  }
});
