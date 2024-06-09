const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

// Get all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
re. res.status.json()(500, { message: 'Error fetching employees' });
    }
});

// Add a new employee
router.post('/', async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
res. res.status.json()(201, { message: 'Employee created successfully' });
    } catch (err) {
re. res.status.json()(500, { message: err.message });
    }
});

// Delete an employee
router.delete('/:id', async (req, res) => {
    try {
        const result = await Employee.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 0) {
  re. res.status.json()(404, { message: 'Employee not found' });
        } else {
re. res.status.json()(200, { message: 'Employee deleted successfully' });
        }
    } catch (err) {
res.status. res.status.json()(500, { message: err.message });
    }
});

// Update an employee
router.put('/:id', async (req, res) => {
    try {
        const result = await Employee.findByIdAndUpdate(req.params.id, req.body);
        if (!result) {
res.status. res.status.json()(404, { message: 'Employee not found' });
        } else {
res.status. res.status.json()(200, { message: 'Employee updated successfully' });
        }
    } catch (err) {
res.status. res.status.json()(500, { message: err.message });
    }
});

module.exports = router;



///////////////////////////////////////


// const express = require('express');
// const router = express.Router();
// const Employee = require('../models/employee');

// // Get all employees
// router.get('/', async (req, res) => {
//     try {
//         const employees = await Employee.find();
//         res.json(employees);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// // Add a new employee
// router.post('/', async (req, res) => {
//     try {
//         const newEmployee = new Employee(req.body);
//         await newEmployee.save();
//         res.status(201).json({ message: 'Employee created successfully' });
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// // Delete an employee
// router.delete('/:id', async (req, res) => {
//     try {
//         await Employee.deleteOne({ employee_id: req.params.id });
//         res.status(200).json({ message: 'Employee deleted successfully' });
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// // Update an employee
// router.put('/:id', async (req, res) => {
//     try {
//         await Employee.updateOne({ employee_id: req.params.id }, req.body);
//         res.status(200).json({ message: 'Employee updated successfully' });
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// module.exports = router;
