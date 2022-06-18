const { Appointment, Doctor } = require('../models');

const appointmentController = {
    addAppointment({ params, body }, res) {
        Appointment.create(body)
            .then(({ _id }) => {
                return Doctor.findOneAndUpdate(
                    { _id: params.doctorId },
                    { $push: { appointments: _id } },
                    { new: true }
                );
            })
            .then(dbDoctorData => {
                if (!dbDoctorData) {
                    res.status(404).json({ message: 'No Doctor found with this id!'});
                    return;
                }
                res.json(dbDoctorData);                
            })
            .catch(err => res.json(err))
    },
    removeAppointment({ params }, res) {
        Appointment.findOneAndDelete({ _id: params.appointmentId })
            .then(deletedAppointment => {
                if (!deletedAppointment) {
                    return res.status(404).json({ message: 'No Appointment found with this id'});
                }
                return Doctor.findOneAndUpdate(
                    { _id: params.doctorId},
                    { $pull: { appointments: params.appointmentId }},
                    { new: true }
                );
            })
            .then(dbDoctorData => {
                if (!dbDoctorData) {
                    res.status(404).json({ message: 'No Doctor found with this id!' });
                    return;
                }
                res.json(dbDoctorData)
            })
            .catch(err => res.json(err))
    }
};

module.exports = appointmentController;