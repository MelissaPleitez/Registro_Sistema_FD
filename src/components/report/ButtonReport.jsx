import React from "react";
import { getReport } from "../../api/ApiMethods";

const ButtonReport = () => {
  const handleDownloadReport = async () => {
    try {
      const response = await getReport();

      const url = window.URL.createObjectURL(new Blob([response.data])); 
      const a = document.createElement("a");
      a.href = url;
      a.download = "client_report.csv";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error al descargar el reporte de clientes:", error);
    }
  };

  return (
    <div className="mt-4">
      <button
        className="btn"
        style={{
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          backgroundColor: "#5AE4A8",
          color: "white",
        }}
        onClick={handleDownloadReport}
      >
        Descargar Reporte CSV
      </button>
    </div>
  );
};

export default ButtonReport;
