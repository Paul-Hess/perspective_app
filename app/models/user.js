
import DS from 'ember-data';

export default DS.Model.extend({
	userName: DS.attr(),
	firstName: DS.attr(),
	lastName: DS.attr(),
	email: DS.attr(),
	createdAt: DS.attr(),
	updatedAt: DS.attr(),
	isAdmin: DS.attr(),
	posts: DS.hasMany('post', {async: true}),
	responses: DS.hasMany('response', {async: true}),
	comments: DS.hasMany('comment', {async: true})
});
