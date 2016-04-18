# perspective

perspective is a collaborative community forum for artists to inspire and reconnect with the muse. Users can upload art to be recreated and reenvisioned by others, harboring creativity, communication, and fresh perspectives.
perspective was created by David Remington, Gracie Lundell, Mao Thygesen, and Paul Hess.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## For the AWS bucket installation: 
go to aws.amazon.com and create an account or sign in to to console.
navigate to simple storage services and create a bucket, make sure the bucket region is 'us-west-2'.
in the bucket open the properties tab, then the permissions tab, then click 'add CORS configuration for bucket' and 
paste in this code: 

    <?xml version="1.0" encoding="UTF-8"?>
	    <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    	    <CORSRule>
            	<AllowedOrigin>http://*</AllowedOrigin>
            	<AllowedOrigin>https://*</AllowedOrigin>
            	<AllowedMethod>GET</AllowedMethod>
            	<AllowedMethod>PUT</AllowedMethod>
            	<AllowedMethod>POST</AllowedMethod>
            	<AllowedMethod>DELETE</AllowedMethod>
            	<AllowedHeader>*</AllowedHeader>
    	    </CORSRule>
	    </CORSConfiguration>


* go to the AWS IAM [Identity Access Management page](console.aws.amazon.com/iam/home)
* click the users tab and create a new user
* make sure to save the access key and secret key for this user
* in the root directory of your fork of this repo create a .env file
* in that file:
	export AWS_ACCESS_KEY_ID='ACCESS_KEY_YOU_JUST_CREATED_FOR_YOUR_USER'
	export AWS_SECRET_ACCESS_KEY='SECRET_KEY_YOU_JUST_CREATED_FOR_YOUR_USER'
* open app/components/new-post.js and in the function titled filesDidChange() change the value of the first key in the params hash to a string equal to the name of the bucket you created in the AWS console
* open app/components/new-response.js and do the same in that function titled filesDidChange().
* open app/routes/profile.js and do the same in the function titled deletePost().
* in your terminal, in the root of the working directory of this repo, type source .env
* run ember s 


## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## License 
available for use under the MIT license

