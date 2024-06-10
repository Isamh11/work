
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './employeeDetail.css';  // Ensure this path is correct

const ProjectPage  = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/api/getLimitedData');
      const mergedData = response.data.assignments.map(({ employee_id, project_code, start_date }) => {
        const employee = response.data.employees.find(emp => emp.employee_id === employee_id) || {};
        const project = response.data.projects.find(proj => proj.project_code === project_code) || {};
        return {
          employee_id,
          employee_name: employee.full_name || 'Unknown',
          project_name: project.project_name || 'Unknown',
          start_date,
          email: employee.email || 'Unknown',
          password: employee.hashed_password || 'Unknown',
          project_code: project.project_code || 'Unknown',
          project_description: project.project_description || 'Unknown'
        };
      });
      setData(mergedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entryData = Object.fromEntries(formData.entries());

    try {
      await axios.post(`http://localhost:3000/api/${type}`, entryData);
      setShowForm('');
      fetchData();
    } catch (error) {
      console.error(`Error adding ${type}:`, error);
    }
  };

  const renderForm = (type) => (
    <form onSubmit={(e) => handleSubmit(e, type)}>
      {type === 'assignments' && (
        <>
          <input type="number" name="employee_id" placeholder="Employee ID" required />
          <input type="text" name="project_code" placeholder="Project Code" required />
          <input type="date" name="start_date" required />
        </>
      )}
      {type === 'employees' && (
        <>
          <input type="number" name="employee_id" placeholder="Employee ID" required />
          <input type="text" name="full_name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
        </>
      )}
      {type === 'projects' && (
        <>
          <input type="text" name="project_code" placeholder="Project Code" required />
          <input type="text" name="project_name" placeholder="Project Name" required />
          <input type="text" name="project_description" placeholder="Project Description" required />
        </>
      )}
      <button type="submit">Add</button>
    </form>
  );

  return (
    <div>
      <h2>Employee Table</h2>
      {loading ? <p>Loading...</p> : (
        <>
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Project Name</th>
                <th>Start Date</th>
                <th>Email</th>
                <th>Password</th>
                <th>Project Code</th>
                <th>Project Description</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ employee_id, employee_name, project_name, start_date, email, password, project_code, project_description }, index) => (
                <tr key={index}>
                  <td>{employee_id}</td>
                  <td>{employee_name}</td>
                  <td>{project_name}</td>
                  <td>{new Date(start_date).toLocaleDateString()}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>{project_code}</td>
                  <td>{project_description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <button onClick={() => setShowForm('assignments')}>Add Assignment</button>
            <button onClick={() => setShowForm('employees')}>Add Employee</button>
            <button onClick={() => setShowForm('projects')}>Add Project</button>
          </div>
          {showForm && renderForm(showForm)}
        </>
      )}
    </div>
  );
};

export default ProjectPage ;
