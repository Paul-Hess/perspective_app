/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {
      environment: deployTarget
    },
    'revision-data': {
      type: 'git-commit'
    },
    's3-index': {
      accessKeyId: "AKIAJ66PE7XTBH7QIN4Q",
      secretAccessKey: "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",
      bucket: "perspective-app",
      region: "us-west-2",
      allowOverwrite: true
    },
    's3': {
      accessKeyId: "AKIAJ66PE7XTBH7QIN4Q",
      secretAccessKey: "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",
      bucket: "perspective-app",
      region: "us-west-2"
    }
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};