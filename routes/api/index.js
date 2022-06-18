const router = require('express').Router();
const doctorRoutes = require('./doctor-routes');
const appointmentRoutes = require('./appointment-routes')

router.use('/doctors', doctorRoutes);
router.use('/appointments', appointmentRoutes)

module.exports = router;