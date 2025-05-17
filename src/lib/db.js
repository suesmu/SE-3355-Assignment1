const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.resolve(process.cwd(), 'database.db'));

module.exports = db;

