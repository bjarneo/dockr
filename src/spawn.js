'use strict';

const spawn = require('child_process').spawn;

module.exports = function spawnCommand(command, args) {
    const run = spawn(command, args);

    run.stdout.on('data', data => console.log(data.toString('utf-8')));

    run.stderr.on('data', data => console.error(data.toString('utf-8')));

    return new Promise((resolve, reject) => {
        run.on('close', resolve);

        run.on('error', reject);
    });
};
