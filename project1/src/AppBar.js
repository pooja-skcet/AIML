// import React from 'react';
// import logo from './Images/sheildlogo.jpg';

// const AppBar = () => {
//   return (
//     <header className="app-bar">
//       <div className="app-bar-left">
//         <img src={logo} alt="S.H.I.E.L.D. Logo" style={{ width: '75px', height: 'auto' }} />
//       </div>
//       <div className="app-bar-right">
//         <ul>
//           <li>Home</li>
//           <li>Contact</li>
//         </ul>
//         <input type="text" placeholder="Search..." />
//       </div>
//     </header>
//   );
// };

// export default AppBar;
// components/AppBar.js
import React from 'react';
import { useTheme } from './ThemeContext';
import './AppBar.css';

const AppBar = () => {
  const { theme } = useTheme(); // Get the current theme from the context

  return (
    <header className={`app-bar ${theme}`}>
      <nav>
        <ul>
          <li><a href="#map">Map</a></li>
          <li><a href="#evidence">Evidence</a></li>
          <li><a href="#video">Video</a></li>
          <li><a href="#insights">Insights</a></li>
          <li><a href="#crime">Crime</a></li>
        </ul>
      </nav>
      <div className="app-bar-right">
        <span className="date-time">June 11, 2019 01:19:14</span>
        <div className="user-avatar">
          <img src="user-avatar.png" alt="John Davies" />
          <span>John Davies</span>
        </div>
      </div>
    </header>
  );
};

export default AppBar;

