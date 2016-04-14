import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		saveCategory() {
			var title = this.get('title');
			this.sendAction('saveCategory', title);
		}
	}
});
