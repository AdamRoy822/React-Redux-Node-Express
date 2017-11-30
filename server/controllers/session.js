const InfoSession = require('../models').InfoSession;

module.exports = {
  create(req, res) {
    return InfoSession
      .create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        whybuy: req.body.whybuy,
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    console.log("Infor sessionController");
    return InfoSession
      .findAll({
        order: [
          ['createdAt', 'DESC']
        ],
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => res.status(400).send(error));
  },

  retrieve(req, res) {
    return InfoSession
      .findById(req.params.userId, {})
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'InfoSession Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return InfoSession
      .findById(req.params.userId, {})
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User registered with this InfoSession ID Not Found',
          });
        }
        return user
          .update({
            first_name: req.body.first_name || user.first_name,
            last_name: req.body.last_name || user.last_name,
            address: req.body.address || user.address,
            city: req.body.city || user.city,
            email: req.body.email || user.email,
            role: req.body.role || user.role,
            website: req.body.website || user.website,
          })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
