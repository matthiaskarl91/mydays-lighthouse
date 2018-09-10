#!/usr/bin/env node
'use strict';

const program = require('commander');
const lighthouse = require('./lib/lighthouse');


program
    .version('0.0.1')
    .command('start [mandator]')
    .description('Start with the audit of the given mandator')
    .option('-a, --all')
    .action(() => lighthouse.start());

program.parse(process.argv);