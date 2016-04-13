import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.authenticatedRoute('profile', {path: 'profile/:user_id'});
  this.route('sign-up');
  this.route('sign-in');
  this.route('post', {path: 'post/:post_id'});
<<<<<<< HEAD
  this.route('uploads');
=======
  this.route('about');
>>>>>>> gracieStyles
});

export default Router;
