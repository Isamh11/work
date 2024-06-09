// import React from 'react';
// import './header.css'; 

// function Header() {
//     return (
//         <header className="header">
//             <h1>Work Board</h1>
//             <nav>
//                 <ul>
//                     <li><a href="">Home</a></li>
//                     <li><a href="">About</a></li>
//                     <li><a href="">Contact</a></li>
//                     <li><a href="EmployeePage.jsx">Employee</a></li>
//                     <li><a href="ProjectPage.jsx">Project</a></li>
//                     <li><a href="AssignmentPage.Jsx">Assignment</a></li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Header;



/////////////22222222222222222222222222222222222222222222222222




// import React from 'react';
// import './header.css';  // Ensure this path is correct

// const Header = ({ setCurrentPage }) => {
//   return (
//     <header className="header">
//       <h1 className="title">Work Board</h1>
//       <nav className="nav">
//         <ul className="nav-list">
//           <li><button className="nav-button" onClick={() => setCurrentPage('home')}>Home</button></li>
//           <li><button className="nav-button" onClick={() => setCurrentPage('about')}>About</button></li>
//           <li><button className="nav-button" onClick={() => setCurrentPage('contact')}>Contact</button></li>
//           <li><button className="nav-button" onClick={() => setCurrentPage('employee')}>Employee</button></li>
//           <li><button className="nav-button" onClick={() => setCurrentPage('employeeDetail')}>Employee Detail</button></li>
//           <li><button className="nav-button" onClick={() => setCurrentPage('project')}>Project</button></li>
//           <li><button className="nav-button" onClick={() => setCurrentPage('assignment')}>Assignment</button></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;




///3333333333333333333333333333333333333333333333333333
// import React from 'react';
// import './header.css';  // Ensure this path is correct

// const Header = ({ setCurrentPage }) => {
//   const handleEmployeeClick = () => {
//     setCurrentPage('employee');
//   };

//   return (
//     <header className="header">
//       <h1 className="title">Work Board</h1>
//       <nav className="nav">
//         <ul className="nav-list">
//           <li><button className="nav-button" onClick={() => setCurrentPage('home')}>Home</button></li>
//           <li><button className="nav-button" onClick={() => setCurrentPage('about')}>About</button></li>
//           <li><button className="nav-button" onClick={() => setCurrentPage('contact')}>Contact</button></li>
//           <li><button className="nav-button" onClick={handleEmployeeClick}>Employee</button></li>
//           <li><button className="nav-button" onClick={() => setCurrentPage('employeeDetail')}>Employee Detail</button></li>
//           <li><button className="nav-button" onClick={() => setCurrentPage('project')}>Project</button></li>
//           <li><button className="nav-button" onClick={() => setCurrentPage('assignment')}>Assignment</button></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;



/////////////////////4444444444444444444444444444444444444444444444444444



import React from 'react';
import './header.css';  // Ensure this path is correct

const Header = ({ setCurrentPage }) => {
  return (
    <header className="header">
      <h1 className="title">Work Board</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li><button className="nav-button" onClick={() => setCurrentPage('home')}>Home</button></li>
          <li><button className="nav-button" onClick={() => setCurrentPage('about')}>About</button></li>
          <li><button className="nav-button" onClick={() => setCurrentPage('contact')}>Contact</button></li>
          <li><button className="nav-button" onClick={() => setCurrentPage('employee')}>Employee</button></li>
          <li><button className="nav-button" onClick={() => setCurrentPage('employeeDetail')}>Employee Detail</button></li>
          <li><button className="nav-button" onClick={() => setCurrentPage('project')}>Project</button></li>
          <li><button className="nav-button" onClick={() => setCurrentPage('assignment')}>Assignment</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
