import React, { useState, useEffect } from "react";
import { updateClient, getClientById, updateCustomerDirection, updateCustomerIdentification } from "../../api/ApiMethods";
import { useNavigate, useParams } from "react-router-dom";

function EditForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    clientEmail: "",
    telNumber: "",
    directions: [],
    identifications: [],
  });
  const navigate = useNavigate();
  const { clientId } = useParams();

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const client = await getClientById(clientId);
        setFormData({
          firstname: client.first_name || "",
          lastname: client.last_name || "",
          clientEmail: client.client_email || "",
          telNumber: client.tel_number || "",
          directions: client.directions || [],
          identifications: client.identifications || [],
        });
      } catch (error) {
        console.error("Error fetching client:", error);
      }
    };

    fetchClient();
  }, [clientId]);

  const handleAddDirection = () => {
    setFormData({
      ...formData,
      directions: [...formData.directions, { address: "", city: "", state: "", postal_code: "" }],
    });
  };

  const handleAddIdentification = () => {
    setFormData({
      ...formData,
      identifications: [...formData.identifications, { identification_type: "", identification_number: "", expiration_date: "" }],
    });
  };
  
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDirectionChange = (index, field, value) => {
    const newDirections = [...formData.directions];
    newDirections[index] = { ...newDirections[index], [field]: value };
    setFormData({ ...formData, directions: newDirections });
  };

  const handleIdentificationChange = (index, field, value) => {
    const newIdentifications = [...formData.identifications];
    newIdentifications[index] = { ...newIdentifications[index], [field]: value };
    setFormData({ ...formData, identifications: newIdentifications });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateClient(clientId, {
        first_name: formData.firstname,
        last_name: formData.lastname,
        client_email: formData.clientEmail,
        tel_number: formData.telNumber,
      });

      await Promise.all(
        formData.directions.map(async (direction, index) => {
          const directionId = direction.id; 
          if (directionId) {
            await updateCustomerDirection(clientId, directionId, direction);
          }
        })
      );

      await Promise.all(
        formData.identifications.map(async (identification, index) => {
          const identificationId = identification.id; 
          if (identificationId) {
            await updateCustomerIdentification(clientId, identificationId, identification);
          }
        })
      );

      navigate("/Dashboard");
    } catch (error) {
      console.error("Error updating client:", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <h2 className="mb-2">Editar Clientes</h2>
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Correo electrónico"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Teléfono"
                name="telNumber"
                value={formData.telNumber}
                onChange={handleInputChange}
              />
            </div>
          
            {formData.directions.map((direction, index) => (
              <div key={index} className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Dirección"
                  value={direction.address || ""}
                  onChange={(e) => handleDirectionChange(index, "address", e.target.value)}
                />
               
              </div>
            ))}
   
            <button type="button" className="btn btn-success mb-3" onClick={handleAddDirection}>
              Agregar dirección
            </button>
            {/* Inputs para identificaciones */}
            {formData.identifications.map((identification, index) => (
              <div key={index} className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tipo de identificación"
                  value={identification.identification_type || ""}
                  onChange={(e) => handleIdentificationChange(index, "identification_type", e.target.value)}
                />
 
              </div>
            ))}

            <button type="button" className="btn btn-success mb-3 mx-3" onClick={handleAddIdentification}>
              Agregar identificación
            </button>
            <br/>
            <button type="submit" className="btn btn-primary mb-3 btn-block">
              Guardar cambios
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditForm;



