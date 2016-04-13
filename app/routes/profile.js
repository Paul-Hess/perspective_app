import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      currentUser: this.get('session').get('uid'),
      user: this.store.findRecord('user', params.user_id)
    })
  }
});
