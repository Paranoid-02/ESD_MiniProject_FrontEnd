import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <h1>Dashboard</h1>
      <p>Welcome to the Outreach Department's Organization Management System.</p>
      <Link to="/organizations" className="btn btn-primary">Manage Organizations</Link>
    </div>
  );
};

export default HomePage;