
import EmberUploader from 'ember-uploader';
import config from '../config/environment';
import AWS from 'npm:aws-sdk';
import Ember from 'ember';

export default EmberUploader.FileField.extend({
		filesDidChange: function() {	 
				var file = event.target.files[0];
		    var size = file.size;
		    var user = this.get('user');
		    var self = this;

				AWS.config.update({
					accessKeyId: config.AWS_ACCESS_KEY_ID,
					secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
					region: 'us-west-2'
				});	

				var key = new Date(Date.now());
				var numKey = key.valueOf();
				var stringKey = numKey.toString();
				var finalKey = stringKey + user.id + file.name;

				var s3 = new AWS.S3();
				var params = {
				  Bucket: 'redidit/images', /* required */
				  Key: finalKey, /* required */
				  Expect: '100-continue',
				  ACL: 'public-read',
				  Body: file,
				  contentType: file.type,
				  contentLength: size,
				  Expires:  new Date(Date.now() + 160000),
				  StorageClass: 'STANDARD'
				};
				s3.upload(params, function(err, data) {
				  if(err) {console.log(err, err.stack); } // an error occurred
				  else    { console.log(data); 
						self.sendAction('setFileLocation', data.Location);
				  }           // successful response

				});
		}

});