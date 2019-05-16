async function main() {
  const knex = require('./knex/knex.js');

  var result = await knex.raw("SELECT sqlite_version() as version");

  console.log(result[0].version)
  knex.destroy()
}

main()
