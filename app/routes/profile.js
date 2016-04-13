import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
     return Ember.RSVP.hash({
      owner: false,
      currentUser: this.get('session').get('uid'),
      user: this.store.findRecord('user', params.user_id)
    }).then(function(model){
      console.log(model.owner)
      if(model.currentUser == model.user.id) {
        model.owner = true
      }
      return model
    });
  }
});
