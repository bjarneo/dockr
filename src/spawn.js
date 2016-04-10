'use strict';

const spawn = require('child_process').spawn;

module.exports = function spawnCommand(command, args, callback) {
    const run = spawn(command, args);

    run.stdout.on('data', data => console.log(data.toString('utf-8')));

    run.stderr.on('data', data => console.error(data.toString('utf-8')));

    run.on('close', closeCode => callback(null, closeCode));

    run.on('exit', callback);
};
