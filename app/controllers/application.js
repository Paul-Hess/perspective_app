import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signOut() {
      let controller = this;
      this.get('session').close();
      controller.transitionToRoute('index');
    }
  }
});
