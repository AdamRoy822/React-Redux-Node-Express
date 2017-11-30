'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize) => {
  var Users = sequelize.define('Users', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    email: Sequelize.STRING,
    contact_type: Sequelize.STRING,
    website: Sequelize.STRING,
    company: Sequelize.STRING,
    phone: Sequelize.STRING,
    zip: Sequelize.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};
