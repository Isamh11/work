


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './employeeDetail.css'; 



// const EmployeeDetail = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState('');

//   useEffect(() => {
//     fetchData();

//     const interval = setInterval(fetchData, 60000); // Fetch data every minute

//     return () => clearInterval(interval);
//   }, []);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get('http://localhost:3000/api/getLimitedData');
//       const { assignments, employees, projects } = response.data;

//       const mergedData = assignments.map(assignment => {
//         const employee = employees.find(emp => emp.employee_id === assignment.employee_id);
//         const project = projects.find(proj => proj.project_code === assignment.project_code);

//         return {
//           employee_id: assignment.employee_id,
//           employee_name: employee ? employee.full_name : 'Unknown',
//           project_name: project ? project.project_name : 'Unknown',
//           start_date: assignment.start_date
//         };
//       });

//       setData(mergedData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addEntry = async (endpoint, entryData) => {
//     try {
//       await axios.post(`http://localhost:3000/api/${endpoint}`, entryData);
//       fetchData(); // Refresh data after adding entry
//       setShowForm(''); // Hide the form after submission
//     } catch (error) {
//       console.error(`Error adding ${endpoint}:`, error);
//     }
//   };

//   const renderForm = (type) => {
//     return (
//       <form onSubmit={(e) => handleSubmit(e, type)}>
//         {type === 'assignments' && (
//           <>
//             <input type="number" placeholder="Employee ID" required />
//             <input type="text" placeholder="Project Code" required />
//             <input type="date" required />
//           </>
//         )}
//         {type === 'employees' && (
//           <>
//             <input type="number" placeholder="Employee ID" required />
//             <input type="text" placeholder="Full Name" required />
//             <input type="email" placeholder="Email" required />
//             <input type="password" placeholder="Password" required />
//           </>
//         )}
//         {type === 'projects' && (
//           <>
//             <input type="text" placeholder="Project Code" required />
//             <input type="text" placeholder="Project Name" required />
//             <input type="text" placeholder="Project Description" required />
//           </>
//         )}
//         <button type="submit">Add</button>
//       </form>
//     );
//   };

//   const handleSubmit = (e, type) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const entryData = {};

//     for (let [key, value] of formData.entries()) {
//       entryData[key] = value;
//     }

//     addEntry(type, entryData);
//   };

//   return (
//     <div>
//       <h2>Employee Table</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           <table>
//             <thead>
//               <tr>
//                 <th style={{ paddingInlineEnd: '40px' }}>Employee_ID</th>
//                 <th style={{ paddingInlineEnd: '40px' }}>Employee_Name</th>
//                 <th style={{ paddingInlineEnd: '40px' }}>Project_Name</th>
//                 <th>Start_Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((entry, index) => (
//                 <tr key={index}>
//                   <td>{entry.employee_id}</td>
//                   <td>{entry.employee_name}</td>
//                   <td>{entry.project_name}</td>
//                   <td>{new Date(entry.start_date).toLocaleDateString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           {/* <div>
//             <button onClick={() => setShowForm('assignments')}>Add Assignment</button>
//             <button onClick={() => setShowForm('employees')}>Add Employee</button>
//             <button onClick={() => setShowForm('projects')}>Add Project</button>
//           </div> */}
//           {showForm && renderForm(showForm)}
//         </>
//       )}
//     </div>
//   );
// };

// export default EmployeeDetail;




//************************************************************************************* */



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







//***************************************************  3333333333333333333 */



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './employeeDetail.css';  // Ensure this path is correct

// const EmployeeDetail = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState('');

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const { data: { assignments, employees, projects } } = await axios.get('http://localhost:3000/api/getLimitedData');
//       const mergedData = assignments.map(({ employee_id, project_code, start_date }) => ({
//         employee_id,
//         employee_name: employees.find(emp => emp.employee_id === employee_id)?.full_name || 'Unknown',
//         project_name: projects.find(proj => proj.project_code === project_code)?.project_name || 'Unknown',
//         start_date
//       }));
//       setData(mergedData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
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




//4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444///





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './employeeDetail.css';  // Ensure this path is correct

// const EmployeeDetail = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState('');

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const { data: { assignments, employees, projects } } = await axios.get('http://localhost:3000/api/getLimitedData');
//       const mergedData = assignments.map(({ employee_id, project_code, start_date }) => ({
//         employee_id,
//         employee_name: employees.find(emp => emp.employee_id === employee_id)?.full_name || 'Unknown',
//         project_name: projects.find(proj => proj.project_code === project_code)?.project_name || 'Unknown',
//         start_date
//       }));
//       setData(mergedData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
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
//                 <th>Email</th>
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





//5555555555555555555555555555555555555555555555555555555555555555//

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './employeeDetail.css';  // Ensure this path is correct

// const EmployeeDetail = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState('');

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const { data: { assignments, employees, projects } } = await axios.get('http://localhost:3000/api/getLimitedData');
//       const mergedData = assignments.map(({ employee_id, project_code, start_date }) => ({
//         employee_id,
//         employee_name: employees.find(emp => emp.employee_id === employee_id)?.full_name || 'Unknown',
//         project_name: projects.find(proj => proj.project_code === project_code)?.project_name || 'Unknown',
//         start_date,
//         email: employees.find(emp => emp.employee_id === employee_id)?.email || 'Unknown',
//         password: employees.find(emp => emp.employee_id === employee_id)?.hashed_password || 'Unknown'
//       }));
//       setData(mergedData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
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
//                 <th>Email</th>
//                 <th>Password</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map(({ employee_id, employee_name, project_name, start_date, email, password }, index) => (
//                 <tr key={index}>
//                   <td>{employee_id}</td>
//                   <td>{employee_name}</td>
//                   <td>{project_name}</td>
//                   <td>{new Date(start_date).toLocaleDateString()}</td>
//                   <td>{email}</td>
//                   <td>{password}</td>
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




///////6666666666666666666666666666666666666666666666666666666666666666666666666666666666


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './employeeDetail.css';  // Ensure this path is correct

// const EmployeeDetail = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState('');

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const { data: { assignments, employees, projects } } = await axios.get('http://localhost:3000/api/getLimitedData');
//       const mergedData = assignments.map(({ employee_id, project_code, start_date }) => {
//         const employee = employees.find(emp => emp.employee_id === employee_id) || {};
//         return {
//           employee_id,
//           employee_name: employee.full_name || 'Unknown',
//           project_name: projects.find(proj => proj.project_code === project_code)?.project_name || 'Unknown',
//           start_date,
//           email: employee.email || 'Unknown',
//           password: employee.hashed_password || 'Unknown'
//         };
//       });
//       setData(mergedData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
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
//                 <th>Email</th>
//                 <th>Password</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map(({ employee_id, employee_name, project_name, start_date, email, password }, index) => (
//                 <tr key={index}>
//                   <td>{employee_id}</td>
//                   <td>{employee_name}</td>
//                   <td>{project_name}</td>
//                   <td>{new Date(start_date).toLocaleDateString()}</td>
//                   <td>{email}</td>
//                   <td>{password}</td>
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




///7777777777777777777777777777777777777777777777777777777777777777777777777777777777777


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './employeeDetail.css';  // Ensure this path is correct

// const EmployeeDetail = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState('');

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const { data: { assignments, employees, projects } } = await axios.get('http://localhost:3000/api/getLimitedData');
//       const mergedData = assignments.map(({ employee_id, project_code, start_date }) => {
//         const employee = employees.find(emp => emp.employee_id === employee_id) || {};
//         const project = projects.find(proj => proj.project_code === project_code) || {};
//         return {
//           employee_id,
//           employee_name: employee.full_name || 'Unknown',
//           project_name: project.project_name || 'Unknown',
//           start_date,
//           email: employee.email || 'Unknown',
//           password: employee.hashed_password || 'Unknown',
//           project_code: project.project_code || 'Unknown',
//           project_description: project.project_description || 'Unknown'
//         };
//       });
//       setData(mergedData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
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
//       <h2>Lab 2 Table with 5 row limit</h2>
//       {loading ? <p>Loading...</p> : (
//         <>
//           <table>
//             <thead>
//               <tr>
//                 <th>EmployeeID</th>
//                 <th>Employee Name</th>
//                 <th>Project Name</th>
//                 <th>Start Date</th>
//                 <th>Email</th>
//                 <th>Password</th>
//                 <th>Project Code</th>
//                 <th>Project Description</th>
//                 <th>Email</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map(({ employee_id, employee_name, project_name, start_date, email, password, project_code, project_description }, index) => (
//                 <tr key={index}>
//                   <td>{employee_id}</td>
//                   <td>{employee_name}</td>
//                   <td>{project_name}</td>
//                   <td>{new Date(start_date).toLocaleDateString()}</td>
//                   <td>{email}</td>
//                   <td>{password}</td>
//                   <td>{project_code}</td>
//                   <td>{project_description}</td>
//                   <td>{email}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div>
//           <button onClick={() => setShowForm('employees')}>Add Employee</button>
//             <button onClick={() => setShowForm('assignments')}>Add Assignment</button>
//             <button onClick={() => setShowForm('projects')}>Add Project</button>
//           </div>
//           {showForm && renderForm(showForm)}
//         </>
//       )}
//     </div>
//   );
// };

// export default EmployeeDetail;




////////88888888888888888888888888888888888888888888888888888888888888888888888888888888


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './employeeDetail.css';  // Ensure this path is correct

const EmployeeDetail = () => {
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

export default EmployeeDetail;
