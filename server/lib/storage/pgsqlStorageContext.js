const {Pool, Client} = require('pg');
const Promise = require('bluebird');
const ArgumentError = require('auth0-extension-tools').ArgumentError;

/**
 * Create a new PGSQLStorageContext.
 * @param {Object} options The options object.
 * @param {Object} options.defaultData The default data to use when the file does not exist or is empty.
 * @constructor
 */
function PGSQLStorageContext(options) {
  
  if (options === null || options === undefined) {
    throw new ArgumentError('The \'options\' object is required when configuring the PGSQLStorageContext.');
  }
  if (!options.pgUser || options.pgUser.length === 0) {
    throw new ArgumentError('The \'pgUser\' property is required when configuring the PGSQLStorageContext.');
  }
  if (!options.pgHost || options.pgHost.length === 0) {
    throw new ArgumentError('The \'pgHost\' property is required when configuring the PGSQLStorageContext.');
  }
  if (!options.pgDatabase || options.pgDatabase.length === 0) {
    throw new ArgumentError('The \'pgDatabase\' property is required when configuring the PGSQLStorageContext.');
  }
  if (!options.pgPassword || options.pgPassword.length === 0) {
    throw new ArgumentError('The \'pgPassword\' property is required when configuring the PGSQLStorageContext.');
  }
  if (!options.pgPort || options.pgPort.length === 0) {
    throw new ArgumentError('The \'pgPort\' property is required when configuring the PGSQLStorageContext.');
  }

  this.pool = new Pool({
          user: options.pgUser,
          host: options.pgHost,
          database: options.pgDatabase,
          password: options.pgPassword,
          port: options.pgPort
  });
  
  // the pool with emit an error on behalf of any idle clients
  // it contains if a backend error or network partition happens
  this.pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  });
}

/**
 * Return the pk column for a table
 * @return {string} pk column name
 */
PGSQLStorageContext.prototype.getCollectionKey = function(tablename) {

  //http://technosophos.com/2015/10/26/querying-postgresql-to-find-the-primary-key-of-a-table.html
/*
   column_name    | ordinal_position
------------------+------------------
 organizations_id |                1
*/ 
  let sql_statement = `SELECT c.column_name, c.ordinal_position
FROM information_schema.key_column_usage AS c
LEFT JOIN information_schema.table_constraints AS t
ON t.constraint_name = c.constraint_name
WHERE t.table_name = '${tablename}' AND t.constraint_type = 'PRIMARY KEY'`;
  
  return this.query(sql_statement)
            .then(recordset => {
              return recordset[0].column_name;
            });
}

/**
 * Execute a query
 * @return {object} Query results
 */
PGSQLStorageContext.prototype.query = function(query, params) {

  return this.pool.connect()
    .then(client => {
      return client.query(query, params||[])
        .then(res => {
          client.release();
          return res.rows;
        })
        .catch(e => {
          client.release();
          console.log(err.stack);
        })
    })
}

/**
 * Module exports.
 * @type {function}
 */
module.exports = PGSQLStorageContext;
