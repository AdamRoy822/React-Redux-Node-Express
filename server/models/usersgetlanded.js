'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize) => {
  var usersGetLanded = sequelize.define('usersGetLandeds', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    email: Sequelize.STRING,
    contact_type: Sequelize.STRING,
    website: Sequelize.STRING,
    company: Sequelize.STRING,
    phone: Sequelize.STRING,
    zip: Sequelize.STRING,
    income: Sequelize.INTEGER,
    monthly_dept: Sequelize.INTEGER,
    down_payment: Sequelize.INTEGER,
    monthly_savings: Sequelize.INTEGER,
    rent: Sequelize.INTEGER,
    credit_score: Sequelize.STRING,
    flight_risk: Sequelize.STRING,
    school_start_date: Sequelize.STRING,
    education_start_date: Sequelize.STRING,
    address: Sequelize.STRING,
    why_homeownership: Sequelize.STRING,
    phone: Sequelize.STRING,
    estimated_home_cost: Sequelize.INTEGER,
    target_geography: Sequelize.STRING,
    income_score: Sequelize.STRING,
    saving_score: Sequelize.STRING,
    purchase_timings: Sequelize.STRING,
    assigned_lender: Sequelize.STRING,
    assigned_realtor: Sequelize.STRING,
    application_completion_date: Sequelize.STRING,
    total_financial_readiness: Sequelize.STRING,
    application_start_date: Sequelize.STRING,
    homeowner: Sequelize.STRING,
    purchase_year: Sequelize.STRING,
    n20_down: Sequelize.STRING,
    school_start_date: Sequelize.STRING,
    education_start_date: Sequelize.STRING,
    survey_completion_date: Sequelize.STRING,
    survey_start_date: Sequelize.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return usersGetLanded;
};
