const router = require('express').Router();
const {
    getAllDoctors,
    getDoctorById,
    createDoctor,
    updateDoctor,
    deleteDoctor
} = require('../../controllers/doctor-controller')

router
    .route('/')
    .get(getAllDoctors)
    .post(createDoctor)

router
    .route('/:id')
    .get(getDoctorById)
    .put(updateDoctor)
    .delete(deleteDoctor);

module.exports = router;