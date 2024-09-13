// import React from 'react';

// const Sidebar = () => {
//   return (
//     <nav className="sidebar">
//       <div className="profile">
//         <img src="/profile.jpg" alt="User" />
//         <p>Alexander Pierce</p>
//       </div>
//       <ul>
//         <li className="active">Dashboard v1</li>
//         <li>Dashboard v2</li>
//         <li>Dashboard v3</li>
//         <li>Widgets</li>
//         <li>Layout Options</li>
//         <li>Charts</li>
//         <li>UI Elements</li>
//         <li>Forms</li>
//         <li>Tables</li>
//         <li>Calendar</li>
//         <li>Gallery</li>
//       </ul>
//     </nav>
//   );
// };

// export default Sidebar;
// components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>PRMIS</h2>
      <ul>
        <li>Incident Reports</li>
        <li>Crime Case</li>
        <li>Traffic Accident</li>
        <li>Arrest & Booking</li>
        <li>Address Registry</li>
        <li>Police Station</li>
        {/* Add more items as per your need */}
      </ul>
    </aside>
  );
};

export default Sidebar;

