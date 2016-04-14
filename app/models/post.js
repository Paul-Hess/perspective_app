import DS from 'ember-data';

export default DS.Model.extend({
	img: DS.attr(),
	description: DS.attr(),
	title: DS.attr(),
	medium: DS.attr(),
	user: DS.belongsTo('user', {async: true}),
	category: DS.attr(),
	// need to cross out until this functionality is set up, right now it's breaking the code due to the hasMan having nothing. remember to add back into post.json file as well.
	responses: DS.hasMany('response', {async: true}),
	comments: DS.hasMany('comment', {async: true}),
	voteTally: DS.attr()
});
