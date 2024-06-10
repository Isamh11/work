import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './employeeDetail.css'; 

const EmployeePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState('');
  const [editFormData, setEditFormData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/api/getData'); // Fetch all data
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

  const handleEdit = (item) => {
    setEditFormData(item);
    setShowForm('edit');
  };

  const handleDelete = async (employee_id) => {
    try {
      await axios.delete(`http://localhost:3000/api/employees/${employee_id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());

    if (!editFormData || !editFormData.employee_id) {
        console.error("No employee selected for update.");
        return;
    }

    try {
        const response = await axios.put(`http://localhost:3000/api/employees/${editFormData.employee_id}`, updatedData);
        console.log("Update response:", response.data);
        setShowForm('');  
        setEditFormData(null); 
        fetchData();  
    } catch (error) {
        console.error('Error updating employee:', error);
    }
};

const renderForm = (type) => {
  return (
      <form onSubmit={type === 'edit' ? handleEditSubmit : (e) => handleSubmit(e, 'employees')}>
          <input 
              type="number" 
              name="employee_id" 
              placeholder="Employee ID" 
              defaultValue={type === 'edit' ? editFormData?.employee_id : ''} 
              required 
              disabled={type === 'edit'}  // Disable only if type is 'edit'
          />
          <input type="text" name="full_name" placeholder="Full Name" defaultValue={editFormData?.employee_name} required />
          <input type="email" name="email" placeholder="Email" defaultValue={editFormData?.email} required />
          <input type="password" name="hashed_password" placeholder="Password" defaultValue={editFormData?.password} required />
          <button type="submit">{type === 'edit' ? 'Update' : 'Add'}</button>
      </form>
  );
};
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
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ employee_id, employee_name, email, password, project_code, project_description }, index) => (
                <tr key={index}>
                  <td>{employee_id}</td>
                  <td>{employee_name}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>
                    <button onClick={() => handleEdit({ employee_id, employee_name, email, password})}>Edit</button>
                    <button onClick={() => handleDelete(employee_id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <button onClick={() => setShowForm('employees')}>Add Employee</button>
          </div>
          {showForm && renderForm(showForm)}
        </>
      )}
    </div>
  );
};

export default EmployeePage;

