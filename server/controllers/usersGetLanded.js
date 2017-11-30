const usersGetLanded = require('../models').usersGetLanded;

module.exports = {
  create(req, res) {
      console.log(req.body)
      usersGetLanded
      .create({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        address: req.body.address,
        city: req.body.city,
        email: req.body.userEmail,
        role: req.body.persontype,
        website: req.body.website,
        income: req.body.income,
        monthly_dept: req.body.monthlyDebt,
        down_payment: req.body.downPayment,
        monthly_savings: req.body.monthlySavings || 0,
        rent: req.body.rent || 0,
        credit_score: req.body.creditScore,
        flight_risk: req.body.housingAssistance.need,
        school_start_date: req.body.yearsAtSchool,
        education_start_date: req.body.yearsInEducation,
        address: req.body.address,
        why_homeownership: req.body.whyBuy,
        phone: req.body.phone,
        estimated_home_cost: req.body.cost || 0,
        target_geography: req.body.location,
        income_score: req.body.incomeScore,
        saving_score: req.body.savingScore,
        purchase_timings: req.body.timing,
        assigned_lender: req.body.lender.haveOne,
        assigned_realtor: req.body.broker.haveOne,
        application_completion_date: req.body.applicationCompleteDate,
        total_financial_readiness: req.body.totalReadiness,
        application_start_date: req.body.applicationStartDate,
        homeowner: req.body.currentOwner.owner,
        purchase_year: req.body.purchaseYear,
        n20_down: req.body.howDidTheyBuy,
        survey_completion_date: req.body.surveyCompleteDate,
        survey_start_date: req.body.surveyStartDate,
      })
      .then((user) => {
        res.status(201).send(user)
      })
      .catch((error) => res.status(400).send(error));
  },
  list(req, res, next) {
      console.log("I am a user usersGetLanded!");
      usersGetLanded.findAll({
        attributes: ['id', 'first_name','last_name', 'email', 'address' ]
      })
      .then((users) => {
         console.log(users);
         res.json(users);
       })
       .catch(next);

  }
};
