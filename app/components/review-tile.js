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
        title: this.get('title'),
        body: this.get('body'),
      };
      this.set('addNewReview', false);
      this.set('title', ""),
      this.set('body', ""),
      this.sendAction('saveReview2', params);
    }
  }
});
