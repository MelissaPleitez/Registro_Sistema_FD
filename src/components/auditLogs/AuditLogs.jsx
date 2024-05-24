import React, { useEffect, useState } from "react";
import { getAuditLogs } from "../../api/ApiMethods";
import moment from "moment";

function AuditLogs () {
    const [auditLogs, setAuditLogs] = useState([]);

    useEffect(() => {
        async function fetchAudits() {
          try {
            const response = await getAuditLogs();
            setAuditLogs(response.data);
          } catch (error) {
            console.error("Error fetching logs:", error);
          }
        }
      
        fetchAudits();
      }, []);

      const formatDateTime = (dateTime) => {
        return moment(dateTime).format("MMMM Do YYYY, h:mm:ss a");
      };

    return (
        <div className="container mt-5">
      <h1>Auditoría de Cambios de Clientes</h1>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Usuario</th>
            <th>Acción</th>
            <th>Cliente</th>
            <th>Fecha y Hora</th>
          </tr>
        </thead>
        <tbody>
          {auditLogs.map((log, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{log.authentication_id}</td>
              <td>{log.changes_client}</td>
              <td>{log.customer_id}</td>
              <td>{formatDateTime(log.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default AuditLogs