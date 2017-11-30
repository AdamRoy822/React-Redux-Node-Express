'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize) => {
  var InfoSession = sequelize.define('InfoSessions', {
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email: Sequelize.STRING,
    whybuy: Sequelize.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return InfoSession;
};
