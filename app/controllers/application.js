import Ember from 'ember';

export default Ember.Controller.extend({
  beforeModel() {
     return this.get('session').fetch();
   },
  actions: {
    signOut() {
      let controller = this;
      this.get('session').close();
      controller.transitionToRoute('index');
    }
  }
});
