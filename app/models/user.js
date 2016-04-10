import DS from 'ember-data';

export default DS.Model.extend({
	handle: DS.attr(),
	email: DS.attr(),
	createdAt: DS.attr(),
	updatedAt: DS.attr(),
	posts: DS.hasMany('post', {async: true}),
	responses: DS.hasMany('response', {async: true}) 
});
