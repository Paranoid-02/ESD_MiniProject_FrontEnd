import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navigation = () => {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Home</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/organizations">Organizations</Link>
          </li>
        </ul>
        {currentUser ? (
          <button className="btn btn-danger" onClick={logout}>Logout</button>
        ) : (
          <Link className="btn btn-primary" to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;