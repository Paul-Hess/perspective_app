import Ember from 'ember';

export default Ember.Component.extend({
			selection: '',
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
		        category: this.get('selection'),
		        medium: this.get('medium'),
		        img: this.get('fileLocation'),
		        voteTally: 1
		      };
		      this.sendAction('savePost', params);
		    },
			  selectCategory(selection, component) {
	      if (selection) {
	        this.set('selection', selection)
	      } else {
	      	alert('this field is required, please select a category');
	      }
	    }
     }
});
