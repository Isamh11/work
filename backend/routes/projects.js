const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Add a new project
router.post('/', async (req, hres) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.status(201).json({ message: 'Project created successfully' });
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).json({ message: 'Duplicate project code error' });
        } else {
            res.status(500).send(err);
        }
    }
});

// Delete a project
router.delete('/:id', async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update a project
router.put('/:id', async (req, res) => {
    try {
        await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: 'Project updated successfully' });
    } catch (err) {
{
        res.status(500).send(err);
    }
});

module.exports = router;
