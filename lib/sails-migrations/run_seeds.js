var knexLoader = require('./helpers/knex_loader.js');
var fs = require('fs');
var path = require('path');
var errors = require('./errors');

function runSeeds() {
  return knexLoader.load().then(function(knex) {
    var dbDir = path.resolve(knex.seed.config.directory);
    if (fs.existsSync(dbDir)) {
      return knex.seed.run();
    } else {
      throw new errors.MigrationsFolderDoesNotExists(dbDir + " does not exists", knex.seed.config);
    }
  })

}
module.exports = runSeeds;