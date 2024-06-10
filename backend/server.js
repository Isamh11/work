const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(cors());

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/work', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Mongoose schemas
const Assignment = mongoose.model('assignment', {
    employee_id: Number,
    project_code: String,
    start_date: Date
}, 'assignment');

const Employee = mongoose.model('employee', {
    employee_id: { type: Number, unique: true },
    full_name: String,
    email: String,
    hashed_password: String
}, 'employee');

const Project = mongoose.model('project', {
    project_code: { type: String, unique: true },
    project_name: String,
    project_description: String
}, 'project');

// Endpoint for fetching limited data
app.get("/api/getLimitedData", async (req, res) => {
    try {
        const assignments = await Assignment.find().limit(5).exec();
        const employees = await Employee.find().limit(5).exec();
        const projects = await Project.find().limit(5).exec();

        res.json({ assignments, employees, projects });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Endpoint for fetching all data
app.get("/api/getData", async (req, res) => {
    try {
        const assignments = await Assignment.find().exec();
        const employees = await Employee.find().exec();
        const projects = await Project.find().exec();

        res.json({ assignments, employees, projects });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Endpoint for adding a new assignment
app.post("/api/assignments", async (req, res) => {
    try {
        const { employee_id, project_code, start_date } = req.body;
        const assignment = new Assignment({ employee_id, project_code, start_date });
        await assignment.save();
        res.status(201).json({ message: 'Assignment created successfully' });
    } catch (err) {
        console.error(err);
        if (err.code === 11000) {
            res.status(400).json({ message: 'Duplicate key error' });
        } else {
            res.status(500).json({ message: 'Server Error' });
        }
    }
});

// Endpoint for adding a new employee
app.post("/api/employees", async (req, res) => {
    try {
        const { employee_id, full_name, email, hashed_password } = req.body;
        const employee = new Employee({ employee_id, full_name, email, hashed_password });
        await employee.save();
        res.status(201).json({ message: 'Employee created successfully' });
    } catch (err) {
        console.error(err);
        if (err.code === 11000) {
            res.status(400).json({ message: 'Duplicate key error' });
        } else {
            res.status(500).json({ message: 'Server Error' });
        }
    }
});

// Endpoint for adding a new project
app.post("/api/projects", async (req, res) => {
    try {
        const { project_code, project_name, project_description } = req.body;
        const project = new Project({ project_code, project_name, project_description });
        await project.save();
        res.status(201).json({ message: 'Project created successfully' });
    } catch (err) {
        console.error(err);
        if (err.code === 11000) {
            res.status(400).json({ message: 'Duplicate key error' });
        } else {
            res.status(500).json({ message: 'Server Error' });
        }
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



///******************************************** Editing and delete  emplyeee part */

// Endpoint for updating an existing employee
app.put("/api/employees/:employee_id", async (req, res) => {
    const { employee_id } = req.params;
    const { full_name, email, hashed_password } = req.body;

    try {
        const updatedEmployee = await Employee.findOneAndUpdate(
            { employee_id: employee_id },
            { full_name, email, hashed_password },
            { new: true }
        );

        if (updatedEmployee) {
            res.json({ message: 'Employee updated successfully', data: updatedEmployee });
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        console.error('Failed to update employee:', error);
        res.status(500).json({ message: 'Failed to update employee' });
    }
});


// Endpoint for deleting an employee by ID
app.delete("/api/employees/:employee_id", async (req, res) => {
    const { employee_id } = req.params;

    try {
        const deletedEmployee = await Employee.findOneAndDelete({ employee_id: employee_id });
        if (deletedEmployee) {
            res.json({ message: 'Employee deleted successfully' });
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        console.error('Failed to delete employee:', error);
        res.status(500).json({ message: 'Failed to delete employee' });
    }
});

///******************************************** Editing and delete  emplyeee part */

// Endpoint for updating an existing assignment
app.put("/api/assignments/:id", async (req, res) => {
    const { id } = req.params;
    const { employee_id, project_code, start_date } = req.body;

    try {
        const updatedAssignment = await Assignment.findByIdAndUpdate(
            id, 
            { employee_id, project_code, start_date },
            { new: true }
        );

        if (updatedAssignment) {
            res.json({ message: 'Assignment updated successfully', data: updatedAssignment });
        } else {
            res.status(404).json({ message: 'Assignment not found' });
        }
    } catch (error) {
        console.error('Failed to update assignment:', error);
        res.status(500).json({ message: 'Failed to update assignment' });
    }
});

// Endpoint for deleting an assignment by ID
app.delete("/api/assignments/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const deletedAssignment = await Assignment.findByIdAndDelete(id);
        if (deletedAssignment) {
            res.json({ message: 'Assignment deleted successfully' });
        } else {
            res.status(404).json({ message: 'Assignment not found' });
        }
    } catch (error) {
        console.error('Failed to delete assignment:', error);
        res.status(500).json({ message: 'Failed to delete assignment' });
    }
});