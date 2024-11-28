import { useEffect } from "react";
import hrService from "../services/hrService";
const HRList = ({ organizationId, hrs, setHRs, setEditHRId }) => {
  const handleDelete = async (hrId) => {
    await hrService.deleteHR(organizationId, hrId);
    setHRs(hrs.filter((hr) => hr.id !== hrId));
  };

  const handleEdit = (hrId) => {
    setEditHRId(hrId);
  };
  useEffect(() => {
    console.log(hrs);
  }, hrs);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hrs.map((hr) => (
            <tr key={hr.id}>
              {/* <td>{hr.id}</td> */}
              <td>{hr.hrName}</td>
              <td>{hr.hrEmail}</td>
              <td>{hr.hrPhone}</td>
              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => handleEdit(hr.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(hr.id)}
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

export default HRList;
