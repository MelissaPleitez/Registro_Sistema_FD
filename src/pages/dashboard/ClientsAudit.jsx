import React, { useState, useEffect } from "react";
import AuditLogs from "../../components/auditLogs/AuditLogs";
import InNavbar from "../../components/navbar/InNavbar";

function ClientsAudit () {


    return (
        <>
        <InNavbar/>
        <AuditLogs />
        </>
    )
}

export default ClientsAudit