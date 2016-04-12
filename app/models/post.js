import DS from 'ember-data';

export default DS.Model.extend({
	img: DS.attr(),
	description: DS.attr(),
	user: DS.belongsTo('user', {async: true}),
	category: DS.belongsTo('category', {async: true}),
	// responses: DS.hasMany('response', {async: true}),
	// comments: DS.hasMany('comment', {async: true}),
	voteTally: DS.attr()
});
