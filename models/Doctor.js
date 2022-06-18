const { Schema, model } = require('mongoose');

const DoctorSchema = new Schema({

    doctorName: {
        type: String,
        required: "Please enter the doctor's name"
    },
    doctorEmail: {
        type: String,
        unique: true,
        required: "Please enter the doctor's email",
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    appointments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Appointment'
        }
    ],

});

const Doctor = model('Doctor', DoctorSchema);

module.exports = Doctor;