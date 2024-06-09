// const mongoose = require('mongoose');

// const employeeSchema = new mongoose.Schema({
//     employee_id: { type: Number, unique: true, required: true },
//     full_name: { type: String, required: true },
//     email: { type: String, required: true },
//     hashed_password: { type: String, required: true }
// });

// module.exports = mongoose.model('employee', employeeSchema);


const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employee_id: { type: Number, unique: true, required: true },
    full_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    hashed_password: { type: String, required: true }
}, { collection: 'employee' }); // Specify the collection name here

module.exports = mongoose.model('Employee', employeeSchema);
