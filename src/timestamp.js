'use strict';

const zeroPad = num => (num <= 9) ? ('0' + num) : num;

module.exports = function getTimestamp() {
    const date = new Date();

    return [
        date.getFullYear(),
        zeroPad(date.getMonth()),
        zeroPad(date.getDate()),
        zeroPad(date.getHours()),
        zeroPad(date.getMinutes()),
        zeroPad(date.getSeconds())
    ].join('');
};
