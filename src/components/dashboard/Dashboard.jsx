import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getClients,
  deleteClients,
  getCustomerDirection,
  getCustomerIdentification,
  deleteCustomerIdentification,
  deleteCustomerDirection
} from "../../api/ApiMethods";

function Dashboard() {
  const profile_pic =
    "https://img.freepik.com/vector-gratis/foto-cuenta-perfil-hombre_24908-81754.jpg?t=st=1716419335~exp=1716422935~hmac=c34aa227e4e7b71f30429555cd895e3480716b90a211b82e230a2efc5ed05d93";
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const clientsResponse = await getClients();
        const clientsData = await Promise.all(
          clientsResponse.data.map(async (client) => {
            const directionsResponse = await getCustomerDirection(client.id);
            const identificationsResponse = await getCustomerIdentification(
              client.id
            );
            return {
              ...client,
              directions: directionsResponse.data,
              identifications: identificationsResponse.data,
            };
          })
        );
        setClients(clientsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleDeleteClient = async (id) => {
    try {
      await deleteClientData(id);
      await deleteClients(id);
      setClients(clients.filter((client) => client.id !== id));
      
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  const deleteClientData = async (clientId) => {
    try {
      const client = clients.find((client) => client.id === clientId);
      if (client) {
        await Promise.all([
          ...client.directions.map(async (direction) => {
            await deleteCustomerDirection(client.id, direction.id);
          }),
          ...client.identifications.map(async (identification) => {
            await deleteCustomerIdentification(client.id, identification.id);
          }),
        ]);
      }
    } catch (error) {
      console.error("Error deleting client data:", error);
    }
  };

  const handleEditClient = (clientData) => {
    navigate(`/Editar/${clientData.id}`);
  };

  return (
    <table className="table align-middle mb-0 bg-white mt-5">
      <thead className="bg-light">
        <tr>
          <th>Nombre completo</th>
          <th>Correo</th>
          <th>Telefono</th>
          <th>Direcciones</th>
          <th>Documentos de identificación</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {clients &&
          clients.map((client) => (
            <tr key={client.id}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={profile_pic}
                    alt=""
                    style={{ width: "45px ", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">
                      {client.first_name} {client.last_name}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-muted mb-0">{client.client_email}</p>
              </td>
              <td>
                <span className="text-muted mb-0">{client.tel_number}</span>
              </td>
              <td>
                {client.directions && client.directions.map((direction, index) => (
                  <p key={index} className="text-muted mb-0">
                   - {direction.address}, {direction.city}, {direction.state},{" "}
                    {direction.postal_code}
                  </p>
                ))}
              </td>
              <td>
                {client.identifications && client.identifications.map((identification, index) => (
                  <p key={index} className="text-muted mb-0">
                    Tipo:  {identification.identification_type}:{" "} <br/>
                    Numero: {identification.identification_number}
                  </p>
                ))}
              </td>
              <td>
                <button
                  style={{
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                    backgroundColor: "#51D6FF",
                    color: "white",
                  }}
                  onClick={() => handleEditClient(client)}
                  type="button"
                  className="btn btn-sm btn-rounded"
                >
                  Editar
                </button>
                <button
                  style={{
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                    backgroundColor: "#F54952",
                    color: "white",
                  }}
                  onClick={() => handleDeleteClient(client.id)}
                  type="button"
                  className="btn btn-sm btn-rounded mx-3"
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Dashboard;
