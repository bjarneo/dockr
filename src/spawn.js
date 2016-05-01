'use strict';

const spawn = require('child_process').spawn;

module.exports = function spawnCommand(command, args) {
    const run = spawn(command, args);

    run.stdout.on('data', data => console.log(data.toString('utf-8')));

    return new Promise((resolve, reject) => {
        run.stderr.on('data', data => reject(data.toString('utf-8')));

        run.on('close', resolve);

        run.on('error', reject);
    });
};
