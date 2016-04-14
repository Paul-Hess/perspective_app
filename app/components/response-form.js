import Ember from 'ember';

export default Ember.Component.extend({
	    fileLocation: '',
      responseForm: false,
      actions: {
	      setFileLocation(data) {
		      this.set('fileLocation', data);
		      this.set('responseForm', true);
	    		},

		    saveResponse() {
		      var params = {
		        user:  this.get('user'),
		        post: this.get('post'),
		        title: this.get('title'),
		        description: this.get('description'),
		        medium: this.get('medium'),
		        img: this.get('fileLocation'),
		        voteTally: 1
		      };
		      this.sendAction('saveResponse', params);
		    }
     }
});
