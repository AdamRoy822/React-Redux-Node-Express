const Broker = require('../models').Broker;

module.exports = {
  create(req, res) {
      console.log(req.body)
      Broker
      .create({
        contact_type: "Broker",
        license: req.body.license,
        brokerage_name: req.body.brokerage,
        brokerage_address: req.body.brokerage_address,
        last_transaction_1: req.body.lastTransaction1,
        last_transaction_2: req.body.lastTransaction2,
        last_transaction_3: req.body.lastTransaction3,
        county_preference: req.body.countyPreference,
        website: req.body.website,
        additional_context: req.body.additional,
        broker_namebroker_name: req.body.broker,
        preferred_buyer: req.body.describe,
        phone: req.body.phone,
        broker_application_start_date: req.body.applicationStartDate,
        broker_application_complete_date: req.body.applicationCompleteDate,
        education_start_date: req.body.yearsInEducation,
        email: req.body.userEmail,
        firstname: req.body.firstName,
        lastname: req.body.lastname,
        company: req.body.company,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
      })
      .then((broker) => {
        res.status(201).send(broker)
      })
      .catch((error) => res.status(400).send(error));
  },
  list(req, res, next) {
      console.log("I am a user broker controller");
      Broker.findAll({
        attributes: ['id', 'firstname','lastname', 'email', 'address' ]
      })
      .then((users) => {
         console.log(users);
         res.json(users);
       })
       .catch(next);
  }
};
