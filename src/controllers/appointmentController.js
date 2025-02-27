const Appointment = require('../models/appointment'); // Import your Mongoose model

exports.getMyAppointments = async (req, res) => {
    try {
        const { clientId } = req.params;
        const appointments = await Appointment.find({ clientId }).sort('dateTimeSlot');
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.bookAppointment = async (req, res) => {
    try {
        const { clientId, doctorId, dateTimeSlot, reason } = req.body;
        const newAppointment = new Appointment({ clientId, doctorId, dateTimeSlot, reason });
        await newAppointment.save();
        res.json({ message: 'Appointment request sent' });
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.getDoctorDashboard = async (req, res) => {
    try {
        const { doctorId } = req.params;
        const appointments = await Appointment.find({ doctorId, status: 'accepted' }).sort('dateTimeSlot');
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.getPendingAppointments = async (req, res) => {
    try {
        const { doctorId } = req.params;
        const pendingAppointments = await Appointment.find({ doctorId, status: 'pending' });
        res.json(pendingAppointments);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.acceptAppointment = async (req, res) => {
    try {
        const { appointmentId } = req.params;
        await Appointment.findByIdAndUpdate(appointmentId, { status: 'accepted' });
        res.json({ message: 'Appointment accepted' });
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.rejectAppointment = async (req, res) => {
    try {
        const { appointmentId } = req.params;
        await Appointment.findByIdAndUpdate(appointmentId, { status: 'rejected' });
        res.json({ message: 'Appointment rejected' });
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};
