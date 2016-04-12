import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('admin');
  this.route('profile');
  this.route('post', {path: '/post/:post_id'});
});

export default Router;
