import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import OrganizationPage from './pages/OrganizationPage';
import { AuthProvider } from './hooks/useAuth';
import PrivateRoute from './utils/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navigation />
          <Routes> {/* Ensure that you use <Routes> around all <Route> components */}
            <Route path="/login" element={<LoginPage />} />
            <Route 
              path="/" 
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/organizations" 
              element={
                <PrivateRoute>
                  <OrganizationPage />
                </PrivateRoute>
              } 
            />
            {/* You can add more routes here */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;