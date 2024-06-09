// import React from 'react';
// import Header from './Header.jsx';
// import Footer from './Footer.jsx';
// import EmployeeDetail from './EmployeeDetail.jsx';
// // import EmployeePage from './pages/EmployeePage.jsx';

// function App() {
//   return (
//     <div>
//       <Header />
//       <EmployeeDetail />
//       {/* <EmployeePage /> */}
//       <Footer />
//     </div>

//   );
// }

// export default App;



////////////////////////////////////////////222222222222222222222222222222222222222222

// import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import EmployeeDetail from './EmployeeDetail';
// import EmployeePage from './EmployeePage'; // Import the new component
// // import HomePage from './pages/HomePage';
// // Import other pages as needed

// function App() {
//   const [currentPage, setCurrentPage] = useState('home');

//   return (
//     <div>
//       <Header setCurrentPage={setCurrentPage} />
//       {/* {currentPage === 'home' && <HomePage />} */}
//       {currentPage === 'employee' && <EmployeePage />} {/* Render EmployeePage when 'employee' is clicked */}
//       {currentPage === 'employeeDetail' && <EmployeeDetail />} {/* Render EmployeeDetail when 'employeeDetail' is clicked */}
//       {/* Render other pages based on currentPage */}
//       <Footer />
//     </div>
//   );
// }

// export default App;














////////////////////////33333333333333333333333333333333333333333333


// import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import EmployeeDetail from './EmployeeDetail';
// import EmployeePage from './EmployeePage'; // Import the new component
// // Import other pages as needed

// function App() {
//   const [currentPage, setCurrentPage] = useState('home');

//   return (
//     <div>
//       <Header setCurrentPage={setCurrentPage} />
//       {currentPage === 'employee' && <EmployeePage />} {/* Render EmployeePage when 'employee' is clicked */}
//       {currentPage === 'employeeDetail' && <EmployeeDetail />} {/* Render EmployeeDetail when 'employeeDetail' is clicked */}
//       {/* Render other pages based on currentPage */}
//       <Footer />
//     </div>
//   );
// }

// export default App;


////////////////44444444444444444444444444444444



import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import EmployeeDetail from './EmployeeDetail';
import EmployeePage from './EmployeePage'; // Import the new component
// Import other pages as needed

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === 'employee' && <EmployeePage />} {/* Render EmployeePage when 'employee' is clicked */}
      {currentPage === 'employeeDetail' && <EmployeeDetail />} {/* Render EmployeeDetail when 'employeeDetail' is clicked */}
      {/* Render other pages based on currentPage */}
      <Footer />
    </div>
  );
}

export default App;
