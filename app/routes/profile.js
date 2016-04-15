import Ember from 'ember';
import config from '../config/environment';
import AWS from 'npm:aws-sdk';

export default Ember.Route.extend({
  model(params) {

     return Ember.RSVP.hash({
      owner: false,
      currentUser: this.get('session').get('uid'),
      user: this.store.findRecord('user', params.user_id)
    }).then(function(model){
      if(model.currentUser === model.user.id) {
        model.owner = true;
      }
      return model;
    });
  },

  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      var user = params.user;

      newPost.save().then(function() {
        user.get('posts').addObject(newPost);
        return user.save();
      });
    },
    deletePost(post) {
        
        var params = {
          Bucket: 'redidit/images',
          Key: post.get('key')
        };

        AWS.config.update({
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          region: process.env.S3_REGION
        });
        var s3 = new AWS.S3();

            var response_deletions = post.get('responses').map(function(response) {
              return response.destroyRecord();
            });
            var comment_deletions = post.get('comments').map(function(comment) {
              return comment.destroyRecord();
            });
            Ember.RSVP.all(response_deletions, comment_deletions).then(function() {
              return post.destroyRecord();
            }).then(function() {
          s3.deleteObject(params, function(err,data){
            if (err) {
              console.log(err, err.stack);
            } else {
              console.log(data);
            }
          });

          });
    }
  }
});
