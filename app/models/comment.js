import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  user: DS.belongsTo('user', {async: true}),
  response: DS.belongsTo('response', {async: true}),//either/or//
  post: DS.belongsTo('post', {async: true})//either/or//
});
