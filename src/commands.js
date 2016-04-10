'use strict';

const spawnCommand = require('./spawn');

function build(tag, dockerFileLocation) {
    return new Promise((resolve, reject) => {
        spawnCommand('docker', ['build', '-t', tag, dockerFileLocation], exitCode => {
            if (exitCode) {
                reject('Docker build failed with exit code: ' + exitCode);
            }

            resolve(tag);
        });
    });
}

function push(tag) {
    return new Promise((resolve, reject) => {
        spawnCommand('docker', ['push', tag], exitCode => {
            if (exitCode) {
                reject('Docker push failed with exit code: ' + exitCode);
            }

            resolve(tag);
        });
    });
}

module.exports = {
    build,
    push
};
