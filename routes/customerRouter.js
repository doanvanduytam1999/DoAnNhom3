const express = require('express');
const CustomerController = require('../controllers/viewsCustomerController');
const authController = require('../controllers/authController');


const router = express.Router();

router.post('/login', authController.loginCustomer);
router.get('/logout', authController.logoutCustomer);
<<<<<<< HEAD
router.get('/getService/:id', authController.isLoggedIn, CustomerController.getService);
router.get('/getDistrict/:id', authController.isLoggedIn, CustomerController.getDistrict);
router.get('/getAgency/:id', authController.isLoggedIn, CustomerController.getAgency);


=======
/* router.get('/getService/:id', authController.isLoggedIn, CustomerController.getService);
router.get('/getDistrict/:id', authController.isLoggedIn, CustomerController.getDistrict);
router.get('/getAgency/:id', authController.isLoggedIn, CustomerController.getAgency);
 */
>>>>>>> parent of c3a4712c... Merge branch 'nhan'
// router.param('id', tourController.checkID);

/* router.get('/studentStudy', CustomerController.getAllStudentStudy);
router.get('/studentBackHome', CustomerController.getAllStudentBackHome); */

/* router
  .route('/')
  .get(CustomerController.getAllStudents)
  .post(CustomerController.createStudent);

router
  .route('/:id')
  .get(CustomerController.getStudent)
  .patch(CustomerController.updateStudent)
  .delete(CustomerController.deleteStudent); */

module.exports = router;
