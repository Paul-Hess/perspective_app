
import EmberUploader from 'ember-uploader';
import config from '../config/environment';
import AWS from 'npm:aws-sdk';
import Ember from 'ember';

export default EmberUploader.FileField.extend({
	filesDidChange: function() {

    var file = event.target.files[0];
    var size = file.size;

    console.log(file);
    console.log(size);

		AWS.config.update({
			accessKeyId: config.AWS_ACCESS_KEY_ID,
			secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
			region: 'us-west-2'
		});	

		var s3 = new AWS.S3();
		var params = {
		  Bucket: 'redidit/images', /* required */
		  Key: file.name, /* required */
		  Expect: '100-continue',
		  ACL: 'public-read',
		  Body: file,
		  contentType: file.type,
		  contentLength: file.size,
		  Expires:  new Date(Date.now() + 160000),
		  StorageClass: 'STANDARD'
		};
		s3.upload(params, function(err, data) {
		  if(err) {console.log(err, err.stack); } // an error occurred
		  else    { console.log(data); }           // successful response
		});

		}
});