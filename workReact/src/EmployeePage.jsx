// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './employeeDetail.css';  // Ensure this path is correct

// const EmployeePage = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState('');

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:3000/api/getLimitedData');
//       const mergedData = response.data.assignments.map(({ employee_id, project_code, start_date }) => {
//         const employee = response.data.employees.find(emp => emp.employee_id === employee_id) || {};
//         const project = response.data.projects.find(proj => proj.project_code === project_code) || {};
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
//                 {/* <th>Project Name</th> */}
//                 {/* <th>Start Date</th> */}
//                 <th>Email</th>
//                 <th>Password</th>
//                 {/* <th>Project Code</th>
//                 <th>Project Description</th> */}
//               </tr>
//             </thead>
//             <tbody>
//               {data.map(({ employee_id, employee_name, project_name, start_date, email, password, project_code, project_description }, index) => (
//                 <tr key={index}>
//                   <td>{employee_id}</td>
//                   <td>{employee_name}</td>
//                   {/* <td>{project_name}</td> */}
//                   {/* <td>{new Date(start_date).toLocaleDateString()}</td> */}
//                   <td>{email}</td>
//                   <td>{password}</td>
//                   {/* <td>{project_code}</td>
//                   <td>{project_description}</td> */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div>
//             {/* <button onClick={() => setShowForm('assignments')}>Add Assignment</button> */}
//             <button onClick={() => setShowForm('employees')}>Add Employee</button>
//             {/* <button onClick={() => setShowForm('projects')}>Add Project</button> */}
//           </div>
//           {showForm && renderForm(showForm)}
//         </>
//       )}
//     </div>
//   );
// };

// export default EmployeePage;











// // //////////22222222222222222222222222222222222222222


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './employeeDetail.css';  // Ensure this path is correct

// const EmployeePage = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState('');

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:3000/api/getLimitedData'); // Fetch all data
//       const mergedData = response.data.assignments.map(({ employee_id, project_code, start_date }) => {
//         const employee = response.data.employees.find(emp => emp.employee_id === employee_id) || {};
//         const project = response.data.projects.find(proj => proj.project_code === project_code) || {};
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
//                 <th>Password</th>
//                 <th>Project Code</th>
//                 <th>Project Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map(({ employee_id, employee_name, email, password, project_code, project_description }, index) => (
//                 <tr key={index}>
//                   <td>{employee_id}</td>
//                   <td>{employee_name}</td>
//                   <td>{email}</td>
//                   <td>{password}</td>
//                   <td>{project_code}</td>
//                   <td>{project_description}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div>
//             <button onClick={() => setShowForm('employees')}>Add Employee</button>
//             <button onClick={() => setShowForm('employees')}>Edit Employee</button>
//             <button onClick={() => setShowForm('employees')}>Delete Employee</button>


//           </div>
//           {showForm && renderForm(showForm)}
//         </>
//       )}
//     </div>
//   );
// };

// export default EmployeePage;



/////////////////////3333333333333333333333333333333333


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './employeeDetail.css';  // Ensure this path is correct

// const EmployeePage = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState('');
//   const [editFormData, setEditFormData] = useState(null);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:3000/api/getData'); // Fetch all data
//       const mergedData = response.data.assignments.map(({ employee_id, project_code, start_date }) => {
//         const employee = response.data.employees.find(emp => emp.employee_id === employee_id) || {};
//         const project = response.data.projects.find(proj => proj.project_code === project_code) || {};
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

//   const handleEdit = (item) => {
//     setEditFormData(item);
//     setShowForm('edit');
//   };

//   const handleDelete = async (employee_id) => {
//     try {
//       await axios.delete(`http://localhost:3000/api/employees/${employee_id}`);
//       fetchData();
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   // const handleEditSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const formData = new FormData(e.target);
//   //   const updatedData = Object.fromEntries(formData.entries());

//   //   try {
//   //     await axios.put(`http://localhost:3000/api/employees/${editFormData.employee_id}`, updatedData);
//   //     setShowForm('');
//   //     setEditFormData(null);
//   //     fetchData();
//   //   } catch (error) {
//   //     console.error('Error updating employee:', error);
//   //   }
//   // };
//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const updatedData = Object.fromEntries(formData.entries());

//     if (!editFormData || !editFormData.employee_id) {
//         console.error("No employee selected for update.");
//         return;
//     }

//     try {
//         // Sends a PUT request to update the employee data
//         const response = await axios.put(`http://localhost:3000/api/employees/${editFormData.employee_id}`, updatedData);
//         console.log("Update response:", response);
//         setShowForm('');  // Close the form
//         setEditFormData(null);  // Clear edit form data
//         fetchData();  // Refresh the employee list
//     } catch (error) {
//         console.error('Error updating employee:', error);
//     }
// };

  
//   //////////////////

//   const renderForm = (type) => {
//     return (
//         <form onSubmit={type === 'edit' ? handleEditSubmit : handleSubmit}>
//             <input type="number" name="employee_id" placeholder="Employee ID" defaultValue={editFormData?.employee_id} required disabled />
//             <input type="text" name="full_name" placeholder="Full Name" defaultValue={editFormData?.employee_name} required />
//             <input type="email" name="email" placeholder="Email" defaultValue={editFormData?.email} required />
//             <input type="password" name="password" placeholder="Password" defaultValue={editFormData?.password} required />
//             <button type="submit">{type === 'edit' ? 'Update' : 'Add'}</button>
//         </form>
//     );
// };


//   // const renderForm = (type) => (
//   //   <form onSubmit={(e) => type === 'edit' ? handleEditSubmit(e) : handleSubmit(e, type)}>
//   //     <input type="number" name="employee_id" placeholder="Employee ID" defaultValue={editFormData?.employee_id} required />
//   //     <input type="text" name="full_name" placeholder="Full Name" defaultValue={editFormData?.employee_name} required />
//   //     <input type="email" name="email" placeholder="Email" defaultValue={editFormData?.email} required />
//   //     <input type="password" name="password" placeholder="Password" defaultValue={editFormData?.password} required />
//   //     {/* {type !== 'employees' && (
//   //       <>
//   //         <input type="text" name="project_code" placeholder="Project Code" defaultValue={editFormData?.project_code} required />
//   //         <input type="text" name="project_name" placeholder="Project Name" defaultValue={editFormData?.project_name} required />
//   //         <input type="text" name="project_description" placeholder="Project Description" defaultValue={editFormData?.project_description} required />
//   //       </>
//   //     )} */}
//   //     <button type="submit">{type === 'edit' ? 'Update' : 'Add'}</button>
//   //   </form>
//   // );

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
//                 <th>Password</th>
//                 {/* <th>Project Code</th>
//                 <th>Project Description</th> */}
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map(({ employee_id, employee_name, email, password, project_code, project_description }, index) => (
//                 <tr key={index}>
//                   <td>{employee_id}</td>
//                   <td>{employee_name}</td>
//                   <td>{email}</td>
//                   <td>{password}</td>
//                   {/* <td>{project_code}</td>
//                   <td>{project_description}</td> */}
//                   <td>
//                     <button onClick={() => handleEdit({ employee_id, employee_name, email, password})}>Edit</button>
//                     <button onClick={() => handleDelete(employee_id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div>
//             <button onClick={() => setShowForm('employees')}>Add Employee</button>
//             {/* <button onClick={() => setShowForm('employees')}>Edit Employee</button>
//             <button onClick={() => setShowForm('employees')}>Delete Employee</button> */}
//           </div>
//           {showForm && renderForm(showForm)}
//         </>
//       )}
//     </div>
//   );
// };

// export default EmployeePage;



// //////////////////////////////////4444444444444444444444444444


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './employeeDetail.css';  // Ensure this path is correct for your CSS styles

const EmployeePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState('');
  const [editFormData, setEditFormData] = useState(null);

  // Fetch all employees
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/api/employees');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entryData = Object.fromEntries(formData.entries());

    try {
      if (showForm === 'edit') {
        await axios.put(`http://localhost:3000/api/employees/${editFormData._id}`, entryData);
      } else {
        await axios.post('http://localhost:3000/api/employees', entryData);
      }
      setShowForm('');
      fetchData();
    } catch (error) {
      console.error(`Error adding/editing employee:`, error);
    }
  };

  const handleEdit = (item) => {
    setEditFormData(item);
    setShowForm('edit');
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/employees/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };


  ////////////////////////////////
//   const renderForm = (type) => {
//     return (
//         <form onSubmit={type === 'edit' ? handleEditSubmit : handleSubmit}>
//             <input type="number" name="employee_id" placeholder="Employee ID" defaultValue={editFormData?.employee_id} required disabled />
//             <input type="text" name="full_name" placeholder="Full Name" defaultValue={editFormData?.employee_name} required />
//             <input type="email" name="email" placeholder="Email" defaultValue={editFormData?.email} required />
//             <input type="password" name="password" placeholder="Password" defaultValue={editFormData?.password} required />
//             <button type="submit">{type === 'edit' ? 'Update' : 'Add'}</button>
//         </form>
//     );
// };


  /////////////////////////////
  const renderForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="_id" defaultValue={editFormData?._id} />
      <input type="text" name="full_name" placeholder="Full Name" defaultValue={editFormData?.full_name} required />

      <input type="email" name="email" placeholder="Email" defaultValue={editFormData?.email} required />
      <input type="password" name="hashed_password" placeholder="Password" defaultValue={editFormData?.hashed_password} required />
      <button type="submit">{showForm === 'edit' ? 'Update' : 'Add'}</button>
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
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((employee) => (
                <tr key={employee._id}>
                  <td>{employee.employee_id}</td>
                  <td>{employee.full_name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.hashed_password}</td>
                  <td>
                    <button onClick={() => handleEdit(employee)}>Edit</button>
                    <button onClick={() => handleDelete(employee._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => {
            setShowForm('add');
            setEditFormData(null);
          }}>Add Employee</button>
          {showForm && renderForm()}  // Ensure this line is corrected to invoke renderForm
        </>
      )}
    </div>
  );
};

export default EmployeePage;
