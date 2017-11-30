const Users = require('../models').Users;

module.exports = {
  create(req, res) {
    return Users
      .create({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        address: req.body.address,
        city: req.body.city,
        email: req.body.email,
        role: req.body.persontype,
        website: req.body.website,
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Users
      .findAll({
        order: [
          ['createdAt', 'DESC']
        ],
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Users
      .findById(req.params.userId, {})
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'Users Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Users
      .findById(req.params.userId, {})
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'Users Not Found',
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
