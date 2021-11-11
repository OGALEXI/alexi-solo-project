const mongoose = require('mongoose');
const conf = require('../config');

mongoose.connect(`mongodb://localhost:27017/${conf.dbName}`);

const newMongooseDB = mongoose.connection;

newMongooseDB.on('error', function () { console.log('There was an error connecting to the database') });
newMongooseDB.once('open', function () { console.log('Connected to the database!') });

module.exports = newMongooseDB;