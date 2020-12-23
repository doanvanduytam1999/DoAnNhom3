const express = require('express');
const viewsCustomerController = require('../controllers/viewsCustomerController');
const authController = require('../controllers/authController');
const customer = require('../models/userCustomerModel');
const { post } = require('./viewsAdminRoute');



const router = express.Router();

router.get('/', viewsCustomerController.getServiceHome);
<<<<<<< HEAD
router.get('/get-schedule', authController.isLoggedIn,  viewsCustomerController.getSchedule);
router.get('/login', viewsCustomerController.getLogin);
=======
/* router.get('/get-schedule', authController.isLoggedIn,  viewsCustomerController.getSchedule);
*/router.get('/login', viewsCustomerController.getLogin);
>>>>>>> parent of c3a4712c... Merge branch 'nhan'
router.get('/sign-in', viewsCustomerController.getSignin);
router.get('/thongtin', viewsCustomerController.getThongTin);
/*
router.get('/service', viewsCustomerController.getTypeService);
router.get('/get-services/:index', viewsCustomerController.getServiceCustomer);
*/
router.get('/profile', authController.isLoggedIn,viewsCustomerController.getProfile)
router.get('/DSLichDat', viewsCustomerController.getLichDatTheoQuan);
router.post('/datlich', authController.isLoggedIn, viewsCustomerController.postDatLich);
router.post('/sign-up', viewsCustomerController.postAddCustomer);
router.post('/editUser', authController.isLoggedIn, viewsCustomerController.postEditUser);
router.post('/updatePassword', authController.isLoggedIn, viewsCustomerController.postUpdatePassword);
<<<<<<< HEAD


=======
>>>>>>> parent of c3a4712c... Merge branch 'nhan'
//router.get('/price-list', viewsCustomerController.getPriceList);
module.exports = router;