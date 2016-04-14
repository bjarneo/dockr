'use strict';

const zeroPad = require('zero-pad');

module.exports = function getTimestamp() {
    const date = new Date();

    return zeroPad([
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ]).join('');
};
