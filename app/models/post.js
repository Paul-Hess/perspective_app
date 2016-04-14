import DS from 'ember-data';

export default DS.Model.extend({
	img: DS.attr(),
	description: DS.attr(),
	title: DS.attr(),
	medium: DS.attr(),
	user: DS.belongsTo('user', {async: true}),
	category: DS.attr(),
	responses: DS.hasMany('response', {async: true}),
	comments: DS.hasMany('comment', {async: true}),
	voteTally: DS.attr()
});
