const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    employee_id: { type: Number, required: true },
    project_code: { type: String, required: true },
    start_date: { type: Date, required: true }
});

module.exports = mongoose.model('Assignment', AssignmentStatementSchema);
