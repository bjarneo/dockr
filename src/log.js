'use strict';

const config = require('./config');

module.exports = function log() {
    if (config.get('options').verbose) {
        return console.log.apply(console, arguments);
    }

    return () => {};
};
