import Ember from 'ember';

export default Ember.Component.extend({
	    fileLocation: '',
      postForm: false,
      actions: {
	      setFileLocation(data) {
		      this.set('fileLocation', data);
		      this.set('postForm', true);
	    		},
		    savePost() {
		      var params = {
		        user:  this.get('user'),
		        title: this.get('title'),
		        description: this.get('description'),
		        medium: this.get('medium'),
		        img: this.get('fileLocation'),
		        voteTally: 1
		      };
		      this.sendAction('savePost', params);
		    }
     }
});
