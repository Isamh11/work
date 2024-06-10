import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './employeeDetail.css'; 

const AssignmentPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState('');
  const [editFormData, setEditFormData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/api/getData');
      const assignmentsData = response.data.assignments.map((assignment) => {
        const employee = response.data.employees.find(emp => emp.employee_id === assignment.employee_id) || {};
        const project = response.data.projects.find(proj => proj.project_code === assignment.project_code) || {};
        return {
          ...assignment,
          employee_name: employee.full_name || 'Unknown',
          project_name: project.project_name || 'Unknown',
          email: employee.email || 'Unknown',
          password: employee.hashed_password || 'Unknown'
        };
      });
      setData(assignmentsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entryData = Object.fromEntries(formData.entries());

    try {
      await axios.post('http://localhost:3000/api/assignments', entryData);
      setShowForm('');
      fetchData();
    } catch (error) {
      console.error('Error adding assignment:', error);
    }
  };

  const handleEdit = (item) => {
    setEditFormData(item);
    setShowForm('edit');
  };

  const handleDelete = async (assignmentId) => {
    try {
      await axios.delete(`http://localhost:3000/api/assignments/${assignmentId}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting assignment:', error);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());

    if (!editFormData || !editFormData._id) {
      console.error("No assignment selected for update.");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:3000/api/assignments/${editFormData._id}`, updatedData);
      console.log("Update response:", response.data);
      setShowForm('');
      setEditFormData(null);
      fetchData();
    } catch (error) {
      console.error('Error updating assignment:', error);
    }
  };

  const renderForm = (type) => {
    return (
      <form onSubmit={type === 'edit' ? handleEditSubmit : handleSubmit}>
        {type === 'edit' ? (
          <input
            type="hidden"
            name="_id"
            value={editFormData?._id}
          />
        ) : null}
        <input type="number" name="employee_id" placeholder="Employee ID" defaultValue={type === 'edit' ? editFormData?.employee_id : ''} required />
        <input type="text" name="project_code" placeholder="Project Code" defaultValue={type === 'edit' ? editFormData?.project_code : ''} required />
        <input type="date" name="start_date" placeholder="Start Date" defaultValue={type === 'edit' ? editFormData?.start_date : ''} required />
        <button type="submit">{type === 'edit' ? 'Update' : 'Add'}</button>
      </form>
    );
  };

  return (
    <div>
      <h2>Assignment Table</h2>
      {loading ? <p>Loading...</p> : (
        <>
          <table>
            <thead>
              <tr>
                <th>Assignment ID</th>
                <th>Employee Name</th>
                <th>Project Name</th>
                <th>Start Date</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item._id}</td>
                  <td>{item.employee_name}</td>
                  <td>{item.project_name}</td>
                  <td>{item.start_date}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <button onClick={() => setShowForm('add')}>Add Assignment</button>
          </div>
          {showForm && renderForm(showForm)}
        </>
      )}
    </div>
  );
};

export default AssignmentPage;
