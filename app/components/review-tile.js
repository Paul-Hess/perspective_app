import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,

  actions: {
    showReviewForm() {
      this.set('addNewReview', true);
    },
    saveReview1() {
      var params = {
        post: this.get('post'),
        user: this.get('user'),
        body: this.get('body'),
      };
      console.log(params);
      this.set('addNewReview', false);
      this.set('body', "");
      this.sendAction('saveReview2', params);
    }
  }
});
