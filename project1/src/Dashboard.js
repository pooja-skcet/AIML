// import React from 'react';
// import AppBar from './AppBar';
// import Sidebar from './Sidebar';
// import DashboardContent from './DashboardContent';
// import './Dashboard.css';

// function Dashboard() {
//   return (
//     <div className="app">
//       <AppBar />
//       <div className="main">
//         <Sidebar />
//         <DashboardContent />
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
// App.js
// import React from 'react';
// import Sidebar from './Sidebar';
// import AppBar from './AppBar';
// import DashboardContent from './DashboardContent';
// import './App.css';

// const Dashboard = () => {
//   return (
//     <div className="app-container">
      
//       <div className="main-content">
//         <AppBar />
//         <DashboardContent />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// import React from 'react';
// import { useTheme } from './ThemeContext';
// import './Dashboard.css';
// import AppBar from './AppBar';
// import DashboardContent from './DashboardContent';

// const Dashboard = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
//       <AppBar />
//       <button
//   onClick={toggleTheme}
//   style={{
//     backgroundColor: theme === 'dark' ? '#3b3f6b' : '#f0f0f0',
//     color: theme === 'dark' ? '#ffffff' : '#000000',
//     border: 'none',
//     padding: '10px 20px',
//     cursor: 'pointer',
//   }}
// >
//   Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
// </button>
//       <DashboardContent />
//     </div>
//   );
// };


// export default Dashboard;
import React from 'react';
import { useTheme } from './ThemeContext';
import './Dashboard.css';
import AppBar from './AppBar';
import DashboardContent from './DashboardContent';
const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
    <AppBar />
      <div className="theme-switch-container">
        <label className="theme-switch">
          <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
          <span className="slider"></span>
        </label>
        <span className="mode-label">{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
      </div>
      
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
