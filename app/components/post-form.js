import Ember from 'ember';

export default Ember.Component.extend({
			selection: '',
	    fileLocation: '',
	    key: '',
      postForm: false,
      actions: {
	      setFileLocation(params2) {
	      	console.log(params2);
		      this.set('fileLocation', params2.fileLocation);
		      this.set('key', params2.key);
		      this.set('postForm', true);
	    		},
		    savePost() {
		      var params = {
		        user:  this.get('user'),
		        key: this.get('key'),
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
