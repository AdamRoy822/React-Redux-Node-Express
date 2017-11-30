'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize) => {
  var Broker = sequelize.define('Brokers', {
    contact_type: Sequelize.STRING,
    license: Sequelize.STRING,
    brokerage_name: Sequelize.STRING,
    brokerage_address: Sequelize.STRING,
    last_transaction_1: Sequelize.STRING,
    last_transaction_2: Sequelize.STRING,
    last_transaction_3: Sequelize.STRING,
    county_preference: Sequelize.STRING,
    website: Sequelize.STRING,
    additional_context: Sequelize.STRING,
    broker_name: Sequelize.STRING,
    preferred_buyer: Sequelize.STRING,
    phone: Sequelize.STRING,
    broker_application_start_date: Sequelize.STRING,
    broker_application_complete_date: Sequelize.STRING,
    email: Sequelize.STRING,
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    company: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Broker;
};
