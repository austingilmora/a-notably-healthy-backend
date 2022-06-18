const { Doctor } = require('../models');

const doctorController = {

    getAllDoctors(req, res) {
        Doctor.find({})
            .populate('appointments')
            .select('-__v')
            .then(dbDoctorData => res.json(dbDoctorData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getDoctorById({ params }, res) {
        Doctor.findById({ _id: params.id })
            .populate('appointments')
            .select('-__v')
            .then(dbDoctorData => {
                if (!dbDoctorData) {
                    res.status(404).json({ message: 'No Doctor found with this id!'});
                    return;
                }
                res.json(dbDoctorData);
            })
            .catch(err => {
                res.status(400).json(err)
            });
    },
    createDoctor({ body }, res) {
        Doctor.create(body)
            .then(dbDoctorData => res.json(dbDoctorData))
            .catch(err => res.status(400).json(err));
    },
    updateDoctor({ params, body }, res) {
        Doctor.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbDoctorData => {
                if (!dbDoctorData) {
                    res.status(404).json({ message: 'No Doctor found with this id!'});
                    return;
                }
                res.json(dbDoctorData)
            })
            .catch(err => res.status(400).json(err));
    },
    deleteDoctor({ params }, res) {
        Doctor.findOneAndDelete({ _id: params.id })
            .then(dbDoctorData => {
                if (!dbDoctorData) {
                    res.status(404).json({ message: 'No Doctor found with this id!' });
                    return;
                }
                res.json(dbDoctorData);
            })
            .catch(err => res.status(400).json(err));
    }
}

module.exports = doctorController;