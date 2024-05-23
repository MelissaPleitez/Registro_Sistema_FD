import React, { useState } from "react";
import { User, Lock } from "react-feather";

function LoginField({ type, placeholder, icon, onChange}) {
  const IconComponents = icon != "User" ? Lock : User;


  return (
    <div className="">
      <input
        type={type}
        name={type}
        placeholder={placeholder}
        className="form-control form-control-lg"
        onChange={onChange}
      />
    </div>
  );
}

export default LoginField;