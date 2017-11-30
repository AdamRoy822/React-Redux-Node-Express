const express = require('express');
const userCtrl = require('../controllers/user.controller');
const usersControllerGetLanded = require('../controllers/usersGetLanded');
const brokerController = require('../controllers/broker');
const userReferController = require('../controllers/users');
const sessionController = require('../controllers/session');
const router = express.Router();

//router.use(policies.checkRoles([ROLES.ADMIN, ROLES.MANAGER]));

// router.route('/')
//   .get(userCtrl.list)
//   .post(userCtrl.create);
router.get('/', userCtrl.list);
router.post('/', userCtrl.create);
// router.route('/:id')
//    .get(userCtrl.read)
//    .put(userCtrl.update)
//    .delete(userCtrl.remove);
router.get('/users_getlanded', usersControllerGetLanded.list);
router.get('/user_broker', brokerController.list);
router.get('/user_refer', userReferController.list);
router.get('/info_registered', sessionController.list);

router.get('/:id', userCtrl.read);
router.put('/:id', userCtrl.update);
router.delete('/:id', userCtrl.remove);


// Brokers Page


// Info registraion page

// app.get('/info_session/:userId', sessionController.retrieve);
// app.put('/info_session/:userId', sessionController.update);
//router.param('userId', userCtrl.getUserByID);

module.exports = router;
