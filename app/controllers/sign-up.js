import Ember from 'ember';

export default Ember.Controller.extend({
  firebase: Ember.inject.service(),
  actions: {
    signUp() {
      let controller = this;
      if (this.get('password') === this.get('passwordCheck')) {
        this.get('firebase').createUser({
          email: this.get('email') || '',
          password: this.get('password') || '',
        }, (error, data) => {
          if (error) {
            console.log(error);
          } else {
            controller.set('email', null);
            controller.set('password', null);
            controller.set('passwordCheck', null);
          }
        });
      } else {
        alert('the passwords do not match, please try again');
      }
    }
  }
});
