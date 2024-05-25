import axios from "axios";

const API_BASE_URL = 'http://localhost:3000/api';
const API_ENDPOINT_REGISTRATION = "http://localhost:3000/signup";
const API_ENDPOINT_LOGIN = "http://localhost:3000/login";
const API_ENDPOINT_LOGOUT = "http://localhost:3000/logout";
const API_ENDPOINT_GET_CLIENTS = "http://localhost:3000/api/customers";
const API_ENDPOINT_GET_AUDITLOGS = "http://localhost:3000/api/audit_logs";
const API_ENDPOINT_GET_REPORTS = "http://localhost:3000/api/generate_client_report.csv";

export const handleRegistrationRequest = async (email, password) => {
  try {
    const response = await axios.post(API_ENDPOINT_REGISTRATION, {
      authentication: { email, password },
    });
    return response;
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};

export const handleLoginRequest = async (email, password) => {
  try {
    const response = await axios.post(API_ENDPOINT_LOGIN, {
      authentication: { email, password },
    });
    return response.data;
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};

export const handleLogout = async () => {
  try {
    const response = await axios.delete(API_ENDPOINT_LOGOUT, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};


export const getClients = async () => {
  try {
    const response = await axios.get(API_ENDPOINT_GET_CLIENTS, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    });
    return response;
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};


export const postClients = async (customerData) => {
  try {
    const response = await axios.post(API_ENDPOINT_GET_CLIENTS, customerData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateClient = async (clientId, updatedClientData) => {
  try {
    const response = await axios.put(`${API_ENDPOINT_GET_CLIENTS}/${clientId}`, updatedClientData, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
    return response;
  } catch (error) {
    console.error("Error updating client:", error);
    throw error;
  }
};

export const deleteClients = async (clientId) => {
  try {
    const response = await axios.delete(`${API_ENDPOINT_GET_CLIENTS}/${clientId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};


export const getClientById = async (clientId) => {
  try {
    const response = await axios.get(`${API_ENDPOINT_GET_CLIENTS}/${clientId}`, 
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
    );
    return response;
  } catch (error) {
    console.error("Error fetching client by ID:", error);
    throw error;
  }
};


export const getAuditLogs = async () => {
  try {
    const response = await axios.get(API_ENDPOINT_GET_AUDITLOGS, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    });
    return response;
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};

export const getReport = async () => {
  try {
    const response = await axios.get(API_ENDPOINT_GET_REPORTS, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      responseType: 'blob'
    });
    return response;
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};


export const createCustomerIdentification = async (customerId, identificationData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/customers/${customerId}/customer_identifications`, identificationData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCustomerIdentification = async (customerId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/customers/${customerId}/customer_identifications`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });

    return response;
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};

export const updateCustomerIdentification = async (customerId, identificationId, updatedIdentificationData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/customers/${customerId}/customer_identifications/${identificationId}`, updatedIdentificationData, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });
    return response;
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};



export const deleteCustomerIdentification = async (customerId, identificationId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/customers/${customerId}/customer_identifications/${identificationId}`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });
    return response;
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};

export const createCustomerDirection = async (customerId, directionData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/customers/${customerId}/customer_directions`, directionData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCustomerDirection = async (customerId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/customers/${customerId}/customer_directions`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });
    return response;
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};

export const updateCustomerDirection = async (customerId, directionId, updatedDirectionData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/customers/${customerId}/customer_directions/${directionId}`, updatedDirectionData, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });
    return response;
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};

export const deleteCustomerDirection = async (customerId, directionId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/customers/${customerId}/customer_identifications/${directionId}`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });
    return response;
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};
