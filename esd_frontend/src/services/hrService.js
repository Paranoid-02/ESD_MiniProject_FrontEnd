import axios from "axios";

const API_URL = "http://localhost:8080/api/organizations";

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return { Authorization: "Bearer " + user };
  } else {
    return {};
  }
};

const getHRsByOrganization = async (organizationId) => {
  try {
    const response = await axios.get(`${API_URL}/${organizationId}/hr`, {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching HRs:", error);
    throw error;
  }
};

const getHRById = async (organizationId, hrId) => {
  try {
    const response = await axios.get(
      `${API_URL}/${organizationId}/hr/${hrId}`,
      {
        headers: authHeader(),
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching HR:", error);
    throw error;
  }
};

const createHR = async (organizationId, hrData) => {
  console.log(organizationId);
  console.log(hrData);
  try {
    const response = await axios.post(
      `${API_URL}/${organizationId}/hr`,
      hrData,
      {
        headers: authHeader(),
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating HR:", error);
    throw error;
  }
};

const updateHR = async (organizationId, hrId, hrData) => {
  try {
    const response = await axios.put(
      `${API_URL}/${organizationId}/hr/${hrId}`,
      hrData,
      {
        headers: authHeader(),
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating HR:", error);
    throw error;
  }
};

const deleteHR = async (organizationId, hrId) => {
  try {
    await axios.delete(`${API_URL}/${organizationId}/hr/${hrId}`, {
      headers: authHeader(),
    });
  } catch (error) {
    console.error("Error deleting HR:", error);
    throw error;
  }
};

export default {
  getHRsByOrganization,
  getHRById,
  createHR,
  updateHR,
  deleteHR,
};
