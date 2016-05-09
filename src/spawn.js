'use strict';

const spawn = require('child_process').spawn;
const ora = require('ora');
const print = require('./log');
const config = require('./config');

const spinner = ora('Creating and pushing docker image to registry');

module.exports = function spawnCommand(command, args) {
    const run = spawn(command, args);

    if (!config.get('options').verbose) {
        spinner.start();
    }

    run.stdout.on('data', data => print(data.toString('utf-8')));

    return new Promise((resolve, reject) => {
        run.stderr.on('data', data => reject(data.toString('utf-8')));

        run.on('close', () => {
            spinner.stop();

            resolve();
        });

        run.on('error', reject);
    });
};
