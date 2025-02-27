// Appointment Model
const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    dateTimeSlot: { type: Date, required: true },
    reason: { type: String, default: '' },
    status: { type: String, enum: ['accepted', 'pending', 'rejected'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});
const Appointment = mongoose.model('Appointment', appointmentSchema);