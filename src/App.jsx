import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./pages/auth/Login";
import ClientsDashboard from "./pages/dashboard/ClientsDashboard";
import ClientsCreate from "./pages/dashboard/ClientsCreate";
import ClientsUpdate from "./pages/dashboard/ClientsUpdate";
import ClientsAudit from "./pages/dashboard/ClientsAudit";
import Registration from "./pages/auth/Registration";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protected/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registrate" element={<Registration />} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/Dashboard" element={<ClientsDashboard />}/>
          <Route path="/NewClient" element={<ClientsCreate />} />
          <Route path="/Editar/:clientId" element={<ClientsUpdate />} />
          <Route path="/Auditoria" element={<ClientsAudit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
