import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
      accessDenied() {
        alert('you must login to view this page')
        this.transitionTo('/log-in');
      },
    },
});
