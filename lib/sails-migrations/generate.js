var knexLoader = require('./helpers/knex_loader.js');

function getMigrationName(name) {
  return name.replace(/( )/g, '_') || 'unnamed_migration';
}

function generateMigration(name, options) {
  name = getMigrationName(name);
  return knexLoader.load().then(function(knex) {
    return knex.migrate.make(name, options)
  })
}


module.exports = generateMigration;