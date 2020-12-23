const express = require('express');
const viewsAdminController = require('../controllers/viewsAdminController');
const customer = require('../models/userCustomerModel');
const service = require('../models/serviceModel');
const admin = require('../models/userAdminModel');
const { check, body } = require('express-validator');
const { route } = require('../app');
const authController = require('../controllers/authController');


const router = express.Router();

router.get('/', viewsAdminController.getLogin);
router.get('/edit-Service/:id', authController.isLoggedInAdmin, viewsAdminController.getEditService);
<<<<<<< HEAD
router.get('/dashboard', authController.isLoggedInAdmin,  viewsAdminController.getDashboard);

=======
*/router.get('/dashboard', authController.isLoggedInAdmin,  viewsAdminController.getDashboard);
/*
>>>>>>> parent of c3a4712c... Merge branch 'nhan'
router.get('/add-Service', authController.isLoggedInAdmin, viewsAdminController.getAddService);
router.get('/service', authController.isLoggedInAdmin, viewsAdminController.getService);

//List admin
router.get('/list-admin/', authController.isLoggedInAdmin, viewsAdminController.getListadmin);
router.get('/edit-admin/:id', authController.isLoggedInAdmin, viewsAdminController.getEditAdmin);
router.get('/update-password', authController.isLoggedInAdmin, viewsAdminController.getUpdatePassword);
router.get('/add-admin', authController.isLoggedInAdmin, viewsAdminController.getAddAdmin);

router.post('/edit-Service/:id', authController.isLoggedInAdmin, viewsAdminController.postEditService);
router.post('/deleteTypeService/:id', authController.isLoggedInAdmin, viewsAdminController.postDeleteTypeService);
router.post('/add-Service', authController.isLoggedInAdmin, viewsAdminController.postAddService);
router.post('/editAdmin/:id', authController.isLoggedInAdmin, viewsAdminController.postEditUSerAdmin);
router.post('/changePasswordUserAdmin/:id', authController.isLoggedInAdmin, viewsAdminController.postChangePassword);
router.post('/add-admin', authController.isLoggedInAdmin, viewsAdminController.postAddUserAdmin);
<<<<<<< HEAD
=======

>>>>>>> parent of c3a4712c... Merge branch 'nhan'

//Lits Schedule
router.get('/list-schedule', authController.isLoggedInAdmin, viewsAdminController.getListSchedule)
router.get('/detail-schedule/:id', authController.isLoggedInAdmin, viewsAdminController.getDetailSchedule);
router.post('/list-schedule/searchPhone', authController.isLoggedInAdmin, viewsAdminController.getSearchPhone);
<<<<<<< HEAD

router.post('/list-schedule/filter', authController.isLoggedInAdmin, viewsAdminController.getScheduleDate); 
=======
router.post('/list-schedule/filter', authController.isLoggedInAdmin, viewsAdminController.getScheduleDate); */
>>>>>>> parent of c3a4712c... Merge branch 'nhan'
module.exports = router;
