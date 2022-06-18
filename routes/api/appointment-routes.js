const router = require('express').Router();
const { addAppointment, removeAppointment } = require('../../controllers/appointment-controller');

router
    .route('/:doctorId')
    .post(addAppointment);

router
    .route('/:doctorId/:appointmentId')
    .delete(removeAppointment);

module.exports = router;