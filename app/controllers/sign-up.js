import Ember from 'ember';
import moment from 'moment';
var ref = new Firebase("https://imitatir.firebaseio.com/");

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
            ref.child("users").child(data.uid).set({
              userName: this.get('userName') || '',
              email: this.get('email') || '',
              firstName: this.get('firstName') || '',
              lastName: this.get('lastName') || '',
              createdAt: this.set('createdAt', moment().format('LL')),
              updatedAt: this.set('updatedAt', moment().format('LL')),
              isAdmin: this.set('isAdmin', false),
            });
            controller.set('email', null);
            controller.set('password', null);
            controller.set('passwordCheck', null);
            controller.set('userName', null);
            controller.set('firstName', null);
            controller.set('lastName', null);
            controller.transitionToRoute('sign-in');
          }
        });
      } else {
        alert('the passwords do not match, please try again');
      }
    }
  }
});
