import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.authenticatedRoute('profile');
  this.route('sign-up');
  this.route('sign-in');
  this.route('post', {path: '/post/:post_id'});
});

export default Router;
