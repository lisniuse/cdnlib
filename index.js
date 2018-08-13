/**
 * Export cdnlib (with )
 */

exports = module.exports = require('./lib/cli');

/*
  Export the version
*/

exports.version = require('./package.json').version;