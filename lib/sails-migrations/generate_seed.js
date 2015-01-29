var knexLoader = require('./helpers/knex_loader.js');

function getSeedName(name) {
  return name.replace(/( )/g, '_') || 'unnamed_seed';
}

function generateSeed(name, options) {
  name = getSeedName(name);
  return knexLoader.load().then(function(knex) {
    return knex.seed.make(name, options)
  })
}


module.exports = generateSeed;