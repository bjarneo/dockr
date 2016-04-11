'use strict';

const spawn = require('./spawn');

function build(tag, dockerFileLocation) {
    return spawn('docker', ['build', '-t', tag, dockerFileLocation])
        .then(() => tag)
        .catch(err => {
            throw new Error(err);
        });
}

function push(tag) {
    return spawn('docker', ['push', tag])
        .then(() => tag)
        .catch(err => {
            throw new Error(err);
        });
}

module.exports = {
    build,
    push
};
