import React, { useState, useEffect } from "react";
import LoginField from "./LoginField";
import { updateClient, getClientById, updateCustomerDirection, updateCustomerIdentification } from "../../api/ApiMethods";
import { useNavigate, useParams } from "react-router-dom";

function EditForm() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        clientEmail: "",
        telNumber: "",
        directions: [{ address: "", city: "", state: "", postal_code: "" }],
        identifications: [
          {
            identification_type: "",
            identification_number: "",
            expiration_date: "",
          },
        ],
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
              directions: client.directions || [{ address: "", city: "", state: "", postal_code: "" }],
              identifications: client.identifications || [{ identification_type: "", identification_number: "", expiration_date: "" }],
            });
          } catch (error) {
            console.error("Error fetching client:", error);
          }
        };
    
        fetchClient();
      }, [clientId]);

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
    newIdentifications[index] = {
      ...newIdentifications[index],
      [field]: value,
    };
    setFormData({ ...formData, identifications: newIdentifications });
  };

  const handleAddDirection = () => {
    setFormData({
      ...formData,
      directions: [
        ...formData.directions,
        { address: "", city: "", state: "", postal_code: "" },
      ],
    });
  };

  const handleRemoveDirection = (index) => {
    const newDirections = [...formData.directions];
    newDirections.splice(index, 1);
    setFormData({ ...formData, directions: newDirections });
  };

  const handleAddIdentification = () => {
    setFormData({
      ...formData,
      identifications: [
        ...formData.identifications,
        {
          identification_type: "",
          identification_number: "",
          expiration_date: "",
        },
      ],
    });
  };

  const handleRemoveIdentification = (index) => {
    const newIdentifications = [...formData.identifications];
    newIdentifications.splice(index, 1);
    setFormData({ ...formData, identifications: newIdentifications });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateClient(clientId, formData);
      navigate("/Dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <h2 className="mb-2">Editar Clientes</h2>
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div data-mdb-input-init className="form-outline mb-4">
              <LoginField
                type={"text"}
                icon={"User"}
                placeholder={"Nombre"}
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
              />
              <label className="form-label">Nombre</label>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <LoginField
                type={"text"}
                icon={"User"}
                placeholder={"Apellido"}
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
              />
              <label className="form-label">Apellido</label>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <LoginField
                type={"email"}
                icon={"User"}
                placeholder={"Correo electrónico"}
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleInputChange}
              />
              <label className="form-label">Correo</label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <LoginField
                type={"tel"}
                icon={"User"}
                placeholder={"Teléfono"}
                name="telNumber"
                value={formData.telNumber}
                onChange={handleInputChange}
              />
              <label className="form-label">Telefono</label>
            </div>

            <div className="mb-3">
              <label>Direcciones</label>
              {formData.directions.map((direction, index) => (
                <div key={index} className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={direction.address}
                    placeholder="Dirección"
                    onChange={(e) =>
                      handleDirectionChange(index, "address", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    className="form-control"
                    value={direction.city}
                    placeholder="Ciudad"
                    onChange={(e) =>
                      handleDirectionChange(index, "city", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    className="form-control"
                    value={direction.state}
                    placeholder="Estado"
                    onChange={(e) =>
                      handleDirectionChange(index, "state", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    className="form-control"
                    value={direction.postal_code}
                    placeholder="Código postal"
                    onChange={(e) =>
                      handleDirectionChange(
                        index,
                        "postal_code",
                        e.target.value
                      )
                    }
                  />
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleRemoveDirection(index)}
                  >
                    -
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-success"
                onClick={handleAddDirection}
              >
                +
              </button>
            </div>

            <div className="mb-3">
              <label>Identificaciones</label>
              {formData.identifications.map((identification, index) => (
                <div key={index} className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={identification.identification_type}
                    placeholder="Tipo de identificación"
                    onChange={(e) =>
                      handleIdentificationChange(
                        index,
                        "identification_type",
                        e.target.value
                      )
                    }
                  />
                  <input
                    type="text"
                    className="form-control"
                    value={identification.identification_number}
                    placeholder="Número de identificación"
                    onChange={(e) =>
                      handleIdentificationChange(
                        index,
                        "identification_number",
                        e.target.value
                      )
                    }
                  />
                  <input
                    type="date"
                    className="form-control"
                    value={identification.expiration_date}
                    onChange={(e) =>
                      handleIdentificationChange(
                        index,
                        "expiration_date",
                        e.target.value
                      )
                    }
                  />
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleRemoveIdentification(index)}
                  >
                    -
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-success"
                onClick={handleAddIdentification}
              >
                +
              </button>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Guardar cambios
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
