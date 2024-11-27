import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import OrganizationPage from './pages/OrganizationPage';
import OrganizationsHRPage from './pages/OrganizationsHRPage';
import { AuthProvider } from './hooks/useAuth';
import PrivateRoute from './utils/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navigation />
          <Routes>
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
            <Route 
              path="/organizations/:organizationId/hrs" 
              element={
                <PrivateRoute>
                  <OrganizationsHRPage />
                </PrivateRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;