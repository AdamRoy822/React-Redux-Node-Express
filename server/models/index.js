'use strict';

require('dotenv').config();
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require('../config/db.js')[env];
var db        = {};
var sequelize;

if (env == 'development') {
  sequelize = new Sequelize(config.database, config.username, config.password, config);

}else {
  sequelize = new Sequelize(config.DATABASE_URL);
}

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

// Export models here.
module.exports.Users = require('./users')(sequelize);
module.exports.AuthUsers = require('./authUsers')(sequelize);
module.exports.InfoSession = require('./infosession')(sequelize);
module.exports.Broker = require('./broker')(sequelize);
module.exports.usersGetLanded = require('./usersgetlanded')(sequelize);
