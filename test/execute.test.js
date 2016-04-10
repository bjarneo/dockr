'use strict';

const assert = require('assert');
const exec = require('child_process').exec;
const execute = require('../index');

describe('#execute', () => {
    before(function(done) {
        exec('docker run -d -p 5000:5000 --name registry registry:2', (error, stdout) => {
            if (error) {
                throw new Error(error);
            }

            console.log(stdout);

            done();
        });
    });

    after(function(done) {
        const cmd = 'docker stop registry && docker rm -v registry && docker rmi localhost:5000/just-a-test';
        exec(cmd, (error, stdout) => {
            if (error) {
                throw new Error(error);
            }

            console.log(stdout);

            done();
        });
    });

    it('should tag and push an image to the registry', function(done) {
        execute({
            registry: 'localhost:5000',
            imageName: 'just-a-test'
        }).then(tag => {
            console.log('Image successfully pushed to %s', tag);

            assert(tag === 'localhost:5000/just-a-test');

            done();
        }).catch(console.error);
    });
});
