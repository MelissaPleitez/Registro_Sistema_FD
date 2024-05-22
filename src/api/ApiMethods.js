import axios from "axios";

const API_ENDPOINT_REGISTRATION = "http://localhost:3000/api/registrations";

export const handleRegistrationSubmit = async (name, username, email, password) => {
    try {
        const response = await axios.post(API_ENDPOINT_REGISTRATION, {
            user: { name, username, email, password }
          });
  
      console.log("Data sent successfully:", response.data);
      return true;
    } catch (error) {
      console.error("Error sending data:", error);
      throw error;
    }
  };