import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  	return Ember.RSVP.hash({
    	posts:  this.store.findAll('post'),
  		// post: this.store.findRecord('post', params.post_id)
  	});
  }
});
