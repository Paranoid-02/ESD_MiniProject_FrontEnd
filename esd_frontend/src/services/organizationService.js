import axios from 'axios';

const API_URL = 'http://localhost:8080/api/organizations';

const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
    } else {
        return {};
    }
};

const getAllOrganizations = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: authHeader(),
        });
        return response.data;
    } catch (error) {
        console.error('Error getting all organizations:', error);
        throw error;
    }
};

const createOrganization = async (organization) => {
    try {
        const response = await axios.post(API_URL, organization, {
            headers: authHeader(),
        });
        return response.data;
    } catch (error) {
        console.error('Error creating organization:', error);
        throw error;
    }
};

const updateOrganization = async (id, organization) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, organization, {
            headers: authHeader(),
        });
        return response.data;
    } catch (error) {
        console.error('Error updating organization:', error);
        throw error;
    }
};

const deleteOrganization = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`, {
            headers: authHeader(),
        });
    } catch (error) {
        console.error('Error deleting organization:', error);
        throw error;
    }
};

export default {
    getAllOrganizations,
    createOrganization,
    updateOrganization,
    deleteOrganization,
};