import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
	img: DS.attr(),
	description: DS.attr(),
	medium: DS.attr(),
	user: DS.belongsTo('user', {async: true}),
 	comments: DS.hasMany('comment', {async: true}),
 	voteTally: DS.attr()
});
