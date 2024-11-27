import React from 'react';
import organizationService from '../services/organizationService';

const OrganizationList = ({ organizations, setOrganizations, setEditId }) => {
  const handleDelete = async (id) => {
    await organizationService.deleteOrganization(id);
    setOrganizations(organizations.filter((org) => org.id !== id));
  };

  return (
    <div className="container mt-3">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map((org) => (
            <tr key={org.id}>
              <td>{org.id}</td>
              <td>{org.name}</td>
              <td>{org.address}</td>
              <td>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => setEditId(org.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(org.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrganizationList;