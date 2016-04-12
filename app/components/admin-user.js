import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteUser(user) {
      if(confirm('Are you sure you want to delete this user?')) {
        this.sendAction('deleteUser', user);
      }
    }
  }
});
