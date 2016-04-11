'use strict';

const assert = require('assert');
const spawn = require('../src/spawn');

describe('#spawn', () => {
    it('should spawn a new process and close it when done', function(done) {
        spawn('echo', ['I win']).then(code => {
            assert(code === 0);

            done();
        });
    });
});
