import React, { useState } from "react";
import {
  postClients,
  createCustomerDirection,
  createCustomerIdentification,
} from "../../api/ApiMethods";
import { useNavigate } from "react-router-dom";

function CreateForm() {
  const [clientEmail, setClientEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [directions, setDirections] = useState([
    { address: "", city: "", state: "", postal_code: "" },
  ]);
  const [identifications, setIdentifications] = useState([
    { identification_type: "", identification_number: "", expiration_date: "" },
  ]);
  const navigate = useNavigate();

  const handleFirstname = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastname = (e) => {
    setLastName(e.target.value);
  };

  const handleClientEmail = (e) => {
    setClientEmail(e.target.value);
  };

  const handleTelNumber = (e) => {
    setTelNumber(e.target.value);
  };

  const handleDirectionChange = (index, field, value) => {
    const newDirections = [...directions];
    newDirections[index] = { ...newDirections[index], [field]: value };
    setDirections(newDirections);
  };

  const handleIdentificationChange = (index, field, value) => {
    const newIdentifications = [...identifications];
    newIdentifications[index] = {
      ...newIdentifications[index],
      [field]: value,
    };
    setIdentifications(newIdentifications);
  };

  const handleAddDirection = () => {
    setDirections([
      ...directions,
      { address: "", city: "", state: "", postal_code: "" },
    ]);
  };

  const handleRemoveDirection = (index) => {
    const newDirections = [...directions];
    newDirections.splice(index, 1);
    setDirections(newDirections);
  };

  const handleAddIdentification = () => {
    setIdentifications([
      ...identifications,
      {
        identification_type: "",
        identification_number: "",
        expiration_date: "",
      },
    ]);
  };

  const handleRemoveIdentification = (index) => {
    const newIdentifications = [...identifications];
    newIdentifications.splice(index, 1);
    setIdentifications(newIdentifications);
  };

  const handleClientsSubmit = async (e) => {
    e.preventDefault();

    const customerData = {
      first_name: firstname,
      last_name: lastname,
      client_email: clientEmail,
      tel_number: telNumber,
    };

    try {
      const response = await postClients(customerData);

      if (response) {
        const customerId = response.id;

        await Promise.all(
          directions.map(async (direction) => {
            await createCustomerDirection(customerId, direction);
          })
        );

        await Promise.all(
          identifications.map(async (identification) => {
            await createCustomerIdentification(customerId, identification);
          })
        );

        navigate("/Dashboard");
      }
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <h2 className="mb-2">Crear Clientes</h2>
        <div className="col-lg-6">
          <form onSubmit={handleClientsSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                onChange={handleFirstname}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                onChange={handleLastname}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Correo electrónico"
                onChange={handleClientEmail}
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Teléfono"
                onChange={handleTelNumber}
              />
            </div>
            <div className="mb-3">
              <label>Direcciones</label>
              {directions.map((direction, index) => (
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
              {identifications.map((identification, index) => (
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
            <button type="submit" className="btn btn-primary btn-block">
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
