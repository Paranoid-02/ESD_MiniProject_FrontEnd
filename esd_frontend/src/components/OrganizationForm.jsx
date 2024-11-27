import React, { useState } from 'react';
import organizationService from '../services/organizationService';

const OrganizationForm = ({ organizationId, setOrganizations }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const organizationData = { name, address };
    let savedOrganization;

    if (organizationId) {
      savedOrganization = await organizationService.updateOrganization(organizationId, organizationData);
    } else {
      savedOrganization = await organizationService.createOrganization(organizationData);
    }

    setOrganizations((prev) => [...prev, savedOrganization]);
    setName('');
    setAddress('');
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success mt-3">Submit</button>
      </form>
    </div>
  );
};

export default OrganizationForm;