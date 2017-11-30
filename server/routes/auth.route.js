const express = require('express');
//const authCtrl = require('../controllers/auth.controller');
const authCtrl = require('../controllers/authUsers');
const router = express.Router();

router.route('/login')
  .post(authCtrl.login);

router.route('/signup')
  .post(authCtrl.signup);

module.exports = router;
