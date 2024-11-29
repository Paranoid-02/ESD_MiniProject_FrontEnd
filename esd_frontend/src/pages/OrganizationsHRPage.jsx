import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HRList from '../components/HRList';
import HRForm from '../components/HRForm';
import hrService from '../services/hrService';

const OrganizationsHRPage = () => {
  const { organizationId } = useParams();
  const [hrs, setHRs] = useState([]);
  const [editHRId, setEditHRId] = useState(null);

  useEffect(() => {
    const fetchHRs = async () => {
      if (organizationId) {
        const hrData = await hrService.getHRsByOrganization(organizationId);
        setHRs(hrData);
      }
    };
    fetchHRs();
  }, [organizationId]);

  // useEffect(() => {
  //   const fetchHRs = async () => {
  //     if (organizationId) {
  //       const hrData = await hrService.getHRsByOrganization(organizationId);
  
  //       // Fix any issues in IDs temporarily
  //       const normalizedHRs = hrData.map((hr) => ({
  //         ...hr,
  //         id: hr.id % organizationId === 0 ? hr.id : hr.id - organizationId + 1,
  //       }));
  //       setHRs(normalizedHRs);
  //     }
  //   };
  //   fetchHRs();
  // }, [organizationId]);
  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-lg-8">
          <h2>HR Contacts for Org</h2>
          <HRList
            organizationId={organizationId}
            hrs={hrs}
            setHRs={setHRs}
            setEditHRId={setEditHRId}
          />
        </div>
        <div className="col-12 col-lg-4">
          <HRForm
            organizationId={organizationId}
            editHRId={editHRId}
            setHRs={setHRs}
            setEditHRId={setEditHRId}
          />
        </div>
      </div>
    </div>
  );
};

export default OrganizationsHRPage;