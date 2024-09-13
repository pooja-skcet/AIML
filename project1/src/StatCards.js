import React from 'react';

const StatCards = () => {
  return (
    <div className="stat-cards">
      <div className="card new-orders">
        <h3>150</h3>
        <p>New Orders</p>
      </div>
      <div className="card bounce-rate">
        <h3>53%</h3>
        <p>Bounce Rate</p>
      </div>
      <div className="card user-registrations">
        <h3>44</h3>
        <p>User Registrations</p>
      </div>
      <div className="card unique-visitors">
        <h3>65</h3>
        <p>Unique Visitors</p>
      </div>
    </div>
  );
};

export default StatCards;
