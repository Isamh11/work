







// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();

// app.use(express.json()); // Parse JSON bodies
// app.use(cors());

// // Connecting to MongoDB
// mongoose.connect('mongodb://localhost:27017/work', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

// // Mongoose schemas
// const Assignment = mongoose.model('assignment', {
//     employee_id: Number,
//     project_code: String,
//     start_date: Date
// }, 'assignment');

// const Employee = mongoose.model('employee', {
//     employee_id: { type: Number, unique: true },
//     full_name: String,
//     email: String,
//     hashed_password: String
// }, 'employee');

// const Project = mongoose.model('project', {
//     project_code: { type: String, unique: true },
//     project_name: String,
//     project_description: String
// }, 'project');

// // Endpoint for fetching limited data
// app.get("/api/getLimitedData", async (req, res) => {
//     try {
//         const assignments = await Assignment.find().limit(5).exec();
//         const employees = await Employee.find().limit(5).exec();
//         const projects = await Project.find().limit(5).exec();

//         res.json({ assignments, employees, projects });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });


// // Endpoint for fetching all data
// app.get("/api/getAllData", async (req, res) => {
//     try {
//         const assignments = await Assignment.find().exec();
//         const employees = await Employee.find().exec();
//         const projects = await Project.find().exec();

//         res.json({ assignments, employees, projects });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });




// // Endpoint for adding a new assignment
// app.post("/api/assignments", async (req, res) => {
//     try {
//         const { employee_id, project_code, start_date } = req.body;
//         const assignment = new Assignment({ employee_id, project_code, start_date });
//         await assignment.save();
//         res.status(201).json({ message: 'Assignment created successfully' });
//     } catch (err) {
//         console.error(err);
//         if (err.code === 11000) {
//             res.status(400).json({ message: 'Duplicate key error' });
//         } else {
//             res.status(500).json({ message: 'Server Error' });
//         }
//     }
// });

// // Endpoint for adding a new employee
// app.post("/api/employees", async (req, res) => {
//     try {
//         const { employee_id, full_name, email, hashed_password } = req.body;
//         const employee = new Employee({ employee_id, full_name, email, hashed_password });
//         await employee.save();
//         res.status(201).json({ message: 'Employee created successfully' });
//     } catch (err) {
//         console.error(err);
//         if (err.code === 11000) {
//             res.status(400).json({ message: 'Duplicate key error' });
//         } else {
//             res.status(500).json({ message: 'Server Error' });
//         }
//     }
// });

// // Endpoint for adding a new project
// app.post("/api/projects", async (req, res) => {
//     try {
//         const { project_code, project_name, project_description } = req.body;
//         const project = new Project({ project_code, project_name, project_description });
//         await project.save();
//         res.status(201).json({ message: 'Project created successfully' });
//     } catch (err) {
//         console.error(err);
//         if (err.code === 11000) {
//             res.status(400).json({ message: 'Duplicate key error' });
//         } else {
//             res.status(500).json({ message: 'Server Error' });
//         }
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




/////////////////////////////222222222222222222222222222222



// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();

// app.use(express.json()); // Parse JSON bodies
// app.use(cors());

// // Connecting to MongoDB
// mongoose.connect('mongodb://localhost:27017/work', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

// // Mongoose schemas
// const Assignment = mongoose.model('assignment', {
//     employee_id: Number,
//     project_code: String,
//     start_date: Date
// }, 'assignment');

// const Employee = mongoose.model('employee', {
//     employee_id: { type: Number, unique: true },
//     full_name: String,
//     email: String,
//     hashed_password: String
// }, 'employee');

// const Project = mongoose.model('project', {
//     project_code: { type: String, unique: true },
//     project_name: String,
//     project_description: String
// }, 'project');

// // Endpoint for fetching limited data
// app.get("/api/getLimitedData", async (req, res) => {
//     try {
//         const assignments = await Assignment.find().limit(5).exec();
//         const employees = await Employee.find().limit(5).exec();
//         const projects = await Project.find().limit(5).exec();

//         res.json({ assignments, employees, projects });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// // Endpoint for fetching all data
// app.get("/api/getAllData", async (req, res) => {
//     try {
//         const assignments = await Assignment.find().exec();
//         const employees = await Employee.find().exec();
//         const projects = await Project.find().exec();

//         res.json({ assignments, employees, projects });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// // Endpoint for adding a new assignment
// app.post("/api/assignments", async (req, res) => {
//     try {
//         const { employee_id, project_code, start_date } = req.body;
//         const assignment = new Assignment({ employee_id, project_code, start_date });
//         await assignment.save();
//         res.status(201).json({ message: 'Assignment created successfully' });
//     } catch (err) {
//         console.error(err);
//         if (err.code === 11000) {
//             res.status(400).json({ message: 'Duplicate key error' });
//         } else {
//             res.status(500).json({ message: 'Server Error' });
//         }
//     }
// });

// // Endpoint for adding a new employee
// app.post("/api/employees", async (req, res) => {
//     try {
//         const { employee_id, full_name, email, hashed_password } = req.body;
//         const employee = new Employee({ employee_id, full_name, email, hashed_password });
//         await employee.save();
//         res.status(201).json({ message: 'Employee created successfully' });
//     } catch (err) {
//         console.error(err);
//         if (err.code === 11000) {
//             res.status(400).json({ message: 'Duplicate key error' });
//         } else {
//             res.status(500).json({ message: 'Server Error' });
//         }
//     }
// });

// // Endpoint for adding a new project
// app.post("/api/projects", async (req, res) => {
//     try {
//         const { project_code, project_name, project_description } = req.body;
//         const project = new Project({ project_code, project_name, project_description });
//         await project.save();
//         res.status(201).json({ message: 'Project created successfully' });
//     } catch (err) {
//         console.error(err);
//         if (err.code === 11000) {
//             res.status(400).json({ message: 'Duplicate key error' });
//         } else {
//             res.status(500).json({ message: 'Server Error' });
//         }
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



//////////33333333333333333333333333333333333333



// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();

// app.use(express.json()); // Parse JSON bodies
// app.use(cors());

// // Connecting to MongoDB
// mongoose.connect('mongodb://localhost:27017/work', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

// // Mongoose schemas
// const Assignment = mongoose.model('assignment', {
//     employee_id: Number,
//     project_code: String,
//     start_date: Date
// }, 'assignment');

// const Employee = mongoose.model('employee', {
//     employee_id: { type: Number, unique: true },
//     full_name: String,
//     email: String,
//     hashed_password: String
// }, 'employee');

// const Project = mongoose.model('project', {
//     project_code: { type: String, unique: true },
//     project_name: String,
//     project_description: String
// }, 'project');

// // Endpoint for fetching limited data
// app.get("/api/getLimitedData", async (req, res) => {
//     try {
//         const assignments = await Assignment.find().limit(5).exec();
//         const employees = await Employee.find().limit(5).exec();
//         const projects = await Project.find().limit(5).exec();

//         res.json({ assignments, employees, projects });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// // Endpoint for fetching all data
// app.get("/api/getAllData", async (req, res) => {
//     try {
//         const assignments = await Assignment.find().exec();
//         const employees = await Employee.find().exec();
//         const projects = await Project.find().exec();

//         res.json({ assignments, employees, projects });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// // Endpoint for adding a new assignment
// app.post("/api/assignments", async (req, res) => {
//     try {
//         const { employee_id, project_code, start_date } = req.body;
//         const assignment = new Assignment({ employee_id, project_code, start_date });
//         await assignment.save();
//         res.status(201).json({ message: 'Assignment created successfully' });
//     } catch (err) {
//         console.error(err);
//         if (err.code === 11000) {
//             res.status(400).json({ message: 'Duplicate key error' });
//         } else {
//             res.status(500).json({ message: 'Server Error' });
//         }
//     }
// });

// // Endpoint for adding a new employee
// app.post("/api/employees", async (req, res) => {
//     try {
//         const { employee_id, full_name, email, hashed_password } = req.body;
//         const employee = new Employee({ employee_id, full_name, email, hashed_password });
//         await employee.save();
//         res.status(201).json({ message: 'Employee created successfully' });
//     } catch (err) {
//         console.error(err);
//         if (err.code === 11000) {
//             res.status(400).json({ message: 'Duplicate key error' });
//         } else {
//             res.status(500).json({ message: 'Server Error' });
//         }
//     }
// });

// // Endpoint for adding a new project
// app.post("/api/projects", async (req, res) => {
//     try {
//         const { project_code, project_name, project_description } = req.body;
//         const project = new Project({ project_code, project_name, project_description });
//         await project.save();
//         res.status(201).json({ message: 'Project created successfully' });
//     } catch (err) {
//         console.error(err);
//         if (err.code === 11000) {
//             res.status(400).json({ message: 'Duplicate key error' });
//         } else {
//             res.status(500).json({ message: 'Server Error' });
//         }
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


////////////////4444444444444444444444444444444444444444444444444444444




// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();

// app.use(express.json()); // Parse JSON bodies
// app.use(cors());

// // Connecting to MongoDB
// mongoose.connect('mongodb://localhost:27017/work', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

// // Mongoose schemas
// const Assignment = mongoose.model('assignment', {
//     employee_id: Number,
//     project_code: String,
//     start_date: Date
// }, 'assignment');

// const Employee = mongoose.model('employee', {
//     employee_id: { type: Number, unique: true },
//     full_name: String,
//     email: String,
//     hashed_password: String
// }, 'employee');

// const Project = mongoose.model('project', {
//     project_code: { type: String, unique: true },
//     project_name: String,
//     project_description: String
// }, 'project');

// // Endpoint for fetching limited data
// app.get("/api/getLimitedData", async (req, res) => {
//     try {
//         const assignments = await Assignment.find().limit(5).exec();
//         const employees = await Employee.find().limit(5).exec();
//         const projects = await Project.find().limit(5).exec();

//         res.json({ assignments, employees, projects });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// // Endpoint for fetching all data
// app.get("/api/getData", async (req, res) => {
//     try {
//         const assignments = await Assignment.find().exec();
//         const employees = await Employee.find().exec();
//         const projects = await Project.find().exec();

//         res.json({ assignments, employees, projects });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// // Endpoint for adding a new assignment
// app.post("/api/assignments", async (req, res) => {
//     try {
//         const { employee_id, project_code, start_date } = req.body;
//         const assignment = new Assignment({ employee_id, project_code, start_date });
//         await assignment.save();
//         res.status(201).json({ message: 'Assignment created successfully' });
//     } catch (err) {
//         console.error(err);
//         if (err.code === 11000) {
//             res.status(400).json({ message: 'Duplicate key error' });
//         } else {
//             res.status(500).json({ message: 'Server Error' });
//         }
//     }
// });

// // Endpoint for adding a new employee
// app.post("/api/employees", async (req, res) => {
//     try {
//         const { employee_id, full_name, email, hashed_password } = req.body;
//         const employee = new Employee({ employee_id, full_name, email, hashed_password });
//         await employee.save();
//         res.status(201).json({ message: 'Employee created successfully' });
//     } catch (err) {
//         console.error(err);
//         if (err.code === 11000) {
//             res.status(400).json({ message: 'Duplicate key error' });
//         } else {
//             res.status(500).json({ message: 'Server Error' });
//         }
//     }
// });

// // Endpoint for adding a new project
// app.post("/api/projects", async (req, res) => {
//     try {
//         const { project_code, project_name, project_description } = req.body;
//         const project = new Project({ project_code, project_name, project_description });
//         await project.save();
//         res.status(201).json({ message: 'Project created successfully' });
//     } catch (err) {
//         console.error(err);
//         if (err.code === 11000) {
//             res.status(400).json({ message: 'Duplicate key error' });
//         } else {
//             res.status(500).json({ message: 'Server Error' });
//         }
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



////////////////////////////////////////////////////55555555555555555555555555555

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();

// app.use(express.json()); // Parse JSON bodies
// app.use(cors());

// // Connecting to MongoDB

// // 'mongodb+srv://isamlund:Lund2024@cluster0.pyt5wpl.mongodb.net/lab1?retryWrites=true&w=majority&appName=Cluster0'

// mongoose.connect('mongodb://localhost:27017/work', { useNewUrlParser: true, useUnifiedTopology: true })
// // mongoose.connect(''mongodb+srv://isamlund:Lund2024@cluster0.pyt5wpl.mongodb.net/lab1?retryWrites=true&w=majority&appName=Cluster0'
// // ', { useNewUrlParser: true, useUnifiedTopology: true })

//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

// const mongoose = require('mongoose');

// // mongoose.connect('mongodb+srv://isamlund:Lund2024@cluster0.pyt5wpl.mongodb.net/lab1?retryWrites=true&w=majority&appName=Cluster0', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// // })
// // .then(() => console.log('MongoDB Connected'))
// // .catch(err => console.log(err));



// // Mongoose schemas
// const Assignment = mongoose.model('assignment', {
//     employee_id: Number,
//     project_code: String,
//     start_date: Date
// }, 'assignment');

// const Employee = mongoose.model('employee', {
//     employee_id: { type: Number, unique: true },
//     full_name: String,
//     email: String,
//     hashed_password: String
// }, 'employee');

// const Project = mongoose.model('project', {
//     project_code: { type: String, unique: true },
//     project_name: String,
//     project_description: String
// }, 'project');

// // Endpoint for fetching limited data
// app.get("/api/getLimitedData", async (req, res) => {
//     try {
//         const assignments = await Assignment.find().limit(5).exec();
//         const employees = await Employee.find().limit(5).exec();
//         const projects = await Project.find().limit(5).exec();

//         res.json({ assignments, employees, projects });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// // Endpoint for fetching all data
// app.get("/api/getData", async (req, res) => {
//     try {
//         const assignments = await Assignment.find().exec();
//         const employees = await Employee.find().exec();
//         const projects = await Project.find().exec();

//         res.json({ assignments, employees, projects });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// // Endpoint for adding a new assignment
// app.post("/api/assignments", async (req, res) => {
//     try {
//         const { employee_id, project_code, start_date } = req.body;
//         const assignment = new Assignment({ employee_id, project_code, start_date });
//         await assignment.save();
//         res.status(201).json({ message: 'Assignment created successfully' });
//     } catch (err) {
//         console.error(err);
//         if (err.code === 11000) {
//             res.status(400).json({ message: 'Duplicate key error' });
//         } else {
//             res.status(500).json({ message: 'Server Error' });
//         }
//     }
// });

// // Endpoint for adding a new employee
// app.post("/api/employees", async (req, res) => {
//     try {
//         const { employee_id, full_name, email, hashed_password } = req.body;
//         const employee = new Employee({ employee_id, full_name, email, hashed_password });
//         await employee.save();
//         res.status(201).json({ message: 'Employee created successfully' });
//     } catch (err) {
//         console.error(err);
//         if (err.code === 11000) {
//             res.status(400).json({ message: 'Duplicate key error' });
//         } else {
//             res.status(500).json({ message: 'Server Error' });
//         }
//     }
// });

// // Endpoint for adding a new project
// app.post("/api/projects", async (req, res) => {
//     try {
//         const { project_code, project_name, project_description } = req.body;
//         const project = new Project({ project_code, project_name, project_description });
//         await project.save();
//         res.status(201).json({ message: 'Project created successfully' });
//     } catch (err) {
//         console.error(err);
//         if (err.code === 11000) {
//             res.status(400).json({ message: 'Duplicate key error' });
//         } else {
//             res.status(500).json({ message: 'Server Error' });
//         }
//     }
// });

// // Endpoint for deleting an employee
// app.delete("/api/employees/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         await Employee.deleteOne({ employee_id: id });
//         res.status(200).json({ message: 'Employee deleted successfully' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// // Endpoint for updating an employee
// app.put("/api/employees/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { employee_id, full_name, email, hashed_password } = req.body;
//         await Employee.updateOne({ employee_id: id }, { employee_id, full_name, email, hashed_password });
//         res.status(200).json({ message: 'Employee updated successfully' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




///////////////////////////6666666666666666666666666666666666666


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employees');
const assignmentRoutes = require('./routes/assignments');
const projectRoutes = require('./routes/projects');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());  // Parse JSON bodies
app.use(cors());  // Enable CORS

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/employees', employeeSettingsRoutes);
app.use('/api/assignments', frameworkAssignmentRoutes);
app.use('/api/projects', convertedProjectRoutes);

// Error handling for unsupported routes
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
