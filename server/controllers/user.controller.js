'use strict'

let AuthUsers = require('../models').AuthUsers;
let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');

module.exports = {
  create : function(req, res) {
    return AuthUsers
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  },
  list : function(req, res, next) {
    console.log("I am a user listing");
    AuthUsers.findAll({
      attributes: ['id', 'firstName','lastName', 'email' ]
    })
    .then((users) => {
      // console.log(users);
       res.json(users);
     })
     .catch(next);
  },
  read : function(req, res) {
    const id = req.params.id;
    console.log(id);
    AuthUsers.findOne({
      where: {id : id},
      attributes: ['id', 'firstName','lastName', 'email']
    })
    .then(user => {
      if (!user) {
        res.status(404).json({message: 'User not found'});
        return;
      } else {
        res.json(user);
      }
    })
    .catch(
      (err) => {res.status(400).json({message: 'Error'});}
    )
  },
  update : function(req, res) {
    const id = req.params.id;
    console.log(req.body);
    let newData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username
    };
    if (req.body.password) {
      newData.password = bcrypt.hashSync(req.body.password, 10);
    }
    console.log(newData);
    AuthUsers.findOne({
      where: { id: id }
    })
    .then(user => {
      return user.updateAttributes(newData)
    })
    .then(updatedUser => {
      res.json(updatedUser);
    });
  },

  remove : function (req, res, next) {
    const id = req.params.id;
    AuthUsers.destroy({
      where: { id: id }
    })
    .then(deletedUser => {
      res.json(deletedUser);
    })
    .catch(next);
  }



}
