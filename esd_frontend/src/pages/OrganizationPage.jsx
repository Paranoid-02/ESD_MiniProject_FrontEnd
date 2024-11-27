import React, { useState, useEffect } from 'react';
import OrganizationForm from '../components/OrganizationForm';
import OrganizationList from '../components/OrganizationList';
import organizationService from '../services/organizationService';

const OrganizationPage = () => {
  const [organizations, setOrganizations] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchOrganizations = async () => {
      const data = await organizationService.getAllOrganizations();
      setOrganizations(data);
    };

    fetchOrganizations();
  }, []);

  const resetEdit = () => setEditId(null);

  return (
    <div className="container mt-3">
      <h2>Organizations</h2>
      <div className="mb-3">
        {editId ? (
          <OrganizationForm organizationId={editId} setOrganizations={setOrganizations} />
        ) : (
          <OrganizationForm setOrganizations={setOrganizations} />
        )}
      </div>
      <OrganizationList organizations={organizations} setOrganizations={setOrganizations} setEditId={setEditId} />
      {editId && <button className="btn btn-warning mt-3" onClick={resetEdit}>Cancel Edit</button>}
    </div>
  );
};

export default OrganizationPage;