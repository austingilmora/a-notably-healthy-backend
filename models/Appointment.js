const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const AppointmentSchema = new Schema({
    appointmentFirstName: {
        type: String,
        required: 'Please remember to input your name.'
    },
    appointmentLastName: {
        type: String,
        required: 'Please remember to input your name.'
    },
    kindOfAppointment: {
        type: String,
        enum: ['New Patient', 'Follow-up', 'Emergency Visit', 'Check-up']
    },
    appointmentTimeAndDate: {
        type: Date,
        required: 'Please select an appointment time. Appointments are available every 15 minutes',
        get: (appointmentTimeAndDateVal => dateFormat(appointmentTimeAndDateVal))
    }
});

const Appointment = model('Appointment', AppointmentSchema);

module.exports = Appointment;