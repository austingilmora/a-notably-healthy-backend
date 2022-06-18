const { Schema, model } = require('mongoose');

const AppointmentSchema = new Schema({
    appointmentName: {
        type: String
    },
    timeAndDate: {
        type: Date,
        
    }
});

const Appointment = model('Appointment', AppointmentSchema);

module.exports = Appointment;