'use strict';

let AuthUsers = require('../models').AuthUsers;

let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');

module.exports = {
  signup : function(req, res) {
    console.log("I am creating a authUser");
    if (req.body.email && req.body.firstName && req.body.lastName && req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
      AuthUsers.findOrCreate({where: {email: req.body.email}, defaults: req.body}).spread((user, created) => {
        res.json(user.get({
          plain: true
        }));
        console.log(created)
      })
    } else {
      res.status(400).json({message: "email, username and password are required"});
    }
  },
  login : function(req, res) {
    if (req.body.email && req.body.password) {
      AuthUsers.findOne({ where: {email: req.body.email} }).then(user => {
        if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
          return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }
        return res.json({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user.id }, 'api') });
      })
    } else {
      res.status(400).json({message: "Username and password are required"});
    }
  }
}
