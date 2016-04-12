import Ember from 'ember';
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
              lastName: this.get('lastName') || ''
            });
            debugger;
            controller.set('email', null);
            controller.set('password', null);
            controller.set('passwordCheck', null);
            controller.set('userName', null);
            controller.set('firstName', null);
            controller.set('lastName', null);
            controller.transitionToRoute('index');
          }
        });
      } else {
        alert('the passwords do not match, please try again');
      }
    }
  }
});
