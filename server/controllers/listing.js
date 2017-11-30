'use strict'

let AuthUsers = require('../models').AuthUsers;
let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');

module.exports = {
  list : function(req, res, next) {
    console.log("I am a user controller");
    AuthUsers.findAll({
      attributes: ['id', 'firstName','lastName', 'email' ]
    })
    .then((users) => {
       console.log(users);
       res.json(users);
     })
     .catch(next);
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


// const User = require('../models/user.model');
// const ROLES = require('../constants/role');
//
// function create(req, res, next) {
//   const user = new User({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     password: req.body.password,
//   });
//
//   if (req.user.role === ROLES.ADMIN && req.body.role) {
//     user.role = req.body.role;
//   }
//
//   user.save()
//   .then((newUser) => {
//     res.json(newUser);
//   })
//   .catch(next);
// }
//
// function update(req, res, next) {
//   Object.assign(req.userModel, {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//   });
//
//   if (req.body.password) {
//     req.userModel.password = req.body.password;
//   }
//
//   if (req.user.role === ROLES.ADMIN && req.body.role) {
//     req.userModel.role = req.body.role;
//   }
//
//   req.userModel.save()
//   .then((updatedUser) => {
//     res.json(updatedUser);
//   })
//   .catch(next);
// }
//
// function read(req, res) {
//   res.json(req.userModel);
// }
//
// function list(req, res, next) {
//   let where = {};
//   if (req.user.role === ROLES.MANAGER) {
//     where = { role: { $ne: ROLES.ADMIN } };
//   }
//
//   User.find(where)
//   .then((users) => {
//     res.json(users);
//   })
//   .catch(next);
// }
//
// function remove(req, res, next) {
//   req.userModel.remove(() => {
//     res.json(req.userModel);
//   })
//   .catch(next);
// }
//
// function getUserByID(req, res, next, id) {
//   User.findById(id)
//   .then((user) => {
//     if (!user) {
//       res.status(404).json({ message: 'User not found' });
//       return;
//     }
//
//     req.userModel = user;
//     next();
//   })
//   .catch(next);
// }
//
//
// module.exports = {
//   create,
//   update,
//   read,
//   list,
//   remove,
//   getUserByID,
//   getProfile,
// };
