



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const EmployeePage = () => {
//     const [employees, setEmployees] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchEmployees = async () => {
//             setLoading(true);
//             try {
//                 const { data } = await axios.get('http://localhost:3000/api/employees');
//                 setEmployees(data.employees);
//             } catch (error) {
//                 console.error('Failed to fetch employees', error);
//             }
//             setLoading(false);
//         };

//         fetchEmployees();
//     }, []);

//     return (
//         <div>
//             <h2>Employees</h2>
//             {loading ? <p>Loading...</p> : (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Employee ID</th>
//                             <th>Full Name</th>
//                             <th>Email</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {employees.map((emp) => (
//                             <tr key={emp._id}>
//                                 <td>{emp.employee_id}</td>
//                                 <td>{emp.full_name}</td>
//                                 <td>{emp.email}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default EmployeePage;




//////////////////////////////////////////////////////////222222222222222222222222222222


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './employeeDetail.css'; 

// const EmployeeDetail = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const { data: { assignments, employees, projects } } = await axios.get('http://localhost:3000/api/getLimitedData');
//         const mergedData = assignments.map(({ employee_id, project_code, start_date }) => ({
//           employee_id,
//           employee_name: employees.find(emp => emp.employee_id === employee_id)?.full_name || 'Unknown',
//           project_name: projects.find(proj => proj.project_code === project_code)?.project_name || 'Unknown',
//           start_date
//         }));
//         setData(mergedData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//       setLoading(false);
//     };

//     fetchData();
//     const interval = setInterval(fetchData, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleSubmit = async (e, type) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const entryData = Object.fromEntries(formData.entries());

//     try {
//       await axios.post(`http://localhost:3000/api/${type}`, entryData);
//       setShowForm('');
//       fetchData();
//     } catch (error) {
//       console.error(`Error adding ${type}:`, error);
//     }
//   };

//   const renderForm = (type) => (
//     <form onSubmit={(e) => handleSubmit(e, type)}>
//       {type === 'assignments' && (
//         <>
//           <input type="number" name="employee_id" placeholder="Employee ID" required />
//           <input type="text" name="project_code" placeholder="Project Code" required />
//           <input type="date" name="start_date" required />
//         </>
//       )}
//       {type === 'employees' && (
//         <>
//           <input type="number" name="employee_id" placeholder="Employee ID" required />
//           <input type="text" name="full_name" placeholder="Full Name" required />
//           <input type="email" name="email" placeholder="Email" required />
//           <input type="password" name="password" placeholder="Password" required />
//         </>
//       )}
//       {type === 'projects' && (
//         <>
//           <input type="text" name="project_code" placeholder="Project Code" required />
//           <input type="text" name="project_name" placeholder="Project Name" required />
//           <input type="text" name="project_description" placeholder="Project Description" required />
//         </>
//       )}
//       <button type="submit">Add</button>
//     </form>
//   );

//   return (
//     <div>
//       <h2>Employee Table</h2>
//       {loading ? <p>Loading...</p> : (
//         <>
//           <table>
//             <thead>
//               <tr>
//                 <th>Employee ID</th>
//                 <th>Employee Name</th>
//                 <th>Project Name</th>
//                 <th>Start Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map(({ employee_id, employee_name, project_name, start_date }, index) => (
//                 <tr key={index}>
//                   <td>{employee_id}</td>
//                   <td>{employee_name}</td>
//                   <td>{project_name}</td>
//                   <td>{new Date(start_date).toLocaleDateString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div>
//             <button onClick={() => setShowForm('assignments')}>Add Assignment</button>
//             <button onClick={() => setShowForm('employees')}>Add Employee</button>
//             <button onClick={() => setShowForm('projects')}>Add Project</button>
//           </div>
//           {showForm && renderForm(showForm)}
//         </>
//       )}
//     </div>
//   );
// };

// export default EmployeeDetail;



//////////////////////////////////////////3333333333333333333333333333


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import EditEmployeeForm from './EditEmployeeForm'; // Import the EditEmployeeForm we defined earlier

// const EmployeePage = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // Fetch all employees
//   const fetchEmployees = () => {
//     axios.get('http://localhost:3000/api/employees')
//       .then(response => {
//         setEmployees(response.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError('Failed to fetch employees');
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const handleSelectEmployee = (employeeId) => {
//     setSelectedEmployeeId(employeeId);
//   };

//   const handleDeleteEmployee = (employeeId) => {
//     axios.delete(`http://localhost:3000/api/employees/${employeeId}`)
//       .then(() => {
//         fetchEmployees();  // Refresh the list after deletion
//       })
//       .catch(err => {
//         setError('Failed to delete employee');
//       });
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Employee Management</h1>
//       {employees.map(employee => (
//         <div key={employee.employee_id}>
//           <span>{employee.full_name} - {employee.email}</span>
//           <button onClick={() => handleSelectEmployee(employee.employee_id)}>Edit</button>
//           <button onClick={() => handleDeleteEmployee(employee.employee_id)}>Delete</button>
//         </div>
//       ))}
//       {selectedEmployeeId && (
//         <EditEmployeeForm employeeId={selectedEmployeeId} />
//       )}
//     </div>
//   );
// };

// export default EmployeePage;
