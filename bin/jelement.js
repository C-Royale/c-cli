#! /usr/bin/env node

var program = require('commander');

program
  .version(require('../package').version)
  .usage('<command> [options]')
  .command('create', 'generate a new bussiness component template').alias('c')
  .parse(process.argv);