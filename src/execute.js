'use strict';

const config = require('./config');
const getTimestamp = require('./timestamp');
const build = require('./commands').build;
const push = require('./commands').push;

const generateTag = options => {
    let tag = '';

    if (options.registry) {
        tag += options.registry + '/';
    }

    if (options.username) {
        tag += options.username + '/';
    }

    tag += options.imageName;

    if (options.timestamp) {
        tag += ':' + getTimestamp();
    }

    return tag;
};

// Execute all the things
module.exports = function execute(options) {
    const opts = {
        registry: options.registry || '',
        username: options.username || '',
        imageName: options.imageName || '',
        timestamp: options.timestamp || false,
        dockerFileLocation: options.dockerFileLocation || '.',
        verbose: options.verbose || false
    };

    // Set config so we could reused it everywhere without passing it as args
    config.set('options', opts);

    return build(generateTag(opts), opts.dockerFileLocation)
        .then(push)
        .catch(err => {
            throw new Error(err);
        });
};
