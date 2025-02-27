const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const { authenticateUser, authorizeRole } = require('../controllers/authController');

// Protect all routes with authentication middleware
router.use(authenticateUser);

// Client Routes
router.get('/my/:clientId', authorizeRole('client'), appointmentController.getMyAppointments);
router.post('/book', authorizeRole('client'), appointmentController.bookAppointment);

// Doctor Routes
router.get('/dashboard/:doctorId', authorizeRole('doctor'), appointmentController.getDoctorDashboard);
router.get('/pending/:doctorId', authorizeRole('doctor'), appointmentController.getPendingAppointments);
router.post('/:appointmentId/accept', authorizeRole('doctor'), appointmentController.acceptAppointment);
router.post('/:appointmentId/reject', authorizeRole('doctor'), appointmentController.rejectAppointment);

module.exports = router;
