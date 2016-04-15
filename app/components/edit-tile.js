import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		saveResponse(params) {
			this.sendAction('saveResponse', params);
		}
	}
});
