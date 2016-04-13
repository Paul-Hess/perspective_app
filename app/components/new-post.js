import config from '../config/environment';
import AWS from 'npm:aws-sdk';
import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		upload() {
			AWS.config.update({
				accessKeyId: config.AWS_ACCESS_KEY_ID,
				secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
				region: 'us-west-2'
			});	
			console.log(AWS.config);
			var s3 = new AWS.S3();
			console.log(s3.config);
			var file = this.get('file');
			var params = {
			  Bucket: 'redidit/images', /* required */
			  Key: "paul's uploads", /* required */
			  ACL: 'public-read',
			  Body: 'test',
			  Expires: new Date(Date.now() + 160000),
			  StorageClass: 'STANDARD'
			};
			s3.putObject(params, function(err, data) {
			  if(err) {console.log(err, err.stack); } // an error occurred
			  else    { console.log(data); }           // successful response
			});

		}
	}
});
