import React, { useState, useEffect } from 'react';
import hrService from '../services/hrService';

const HRForm = ({ organizationId, editHRId, setHRs, setEditHRId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const fetchHR = async () => {
      if (editHRId) {
        const hr = await hrService.getHRById(organizationId, editHRId);
        setName(hr.name);
        setEmail(hr.email);
        setPhone(hr.phone);
      }
    };
    fetchHR();
  }, [editHRId, organizationId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hrData = { name, email, phone };

    if (editHRId) {
      await hrService.updateHR(organizationId, editHRId, hrData);
    } else {
      await hrService.createHR(organizationId, hrData);
    }

    const updatedHRs = await hrService.getHRsByOrganization(organizationId);
    setHRs(updatedHRs);
    setEditHRId(null);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{editHRId ? 'Edit HR' : 'Add HR'}</h3>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input
          type="text"
          className="form-control"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-success">{editHRId ? 'Update' : 'Add'}</button>
      {editHRId && (
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => setEditHRId(null)}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default HRForm;
