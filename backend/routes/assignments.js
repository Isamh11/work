const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

// Get all assignments
router.get('/', async (req, res) => {
    try {
        const assignments = await Assignment.find();
        res.json(assignments);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Add a new assignment
router.post('/', async (req, res) => {
    try {
        const newAssignment = new Assignment(req.body);
        await newAssignment.save();
        res.status(201).json({ message: 'Assignment created successfully' });
    } catch (err) {
        res.status(500).send(err);
    }
});

// Delete an assignment
router.delete('/:id', async (req, res) => {
    try {
        await Assignment.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Assignment deleted successfully' });
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update an assignment
router.put('/:id', async (req, res) => {
    try {
        await Assignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: 'Assignment updated successfully' });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
