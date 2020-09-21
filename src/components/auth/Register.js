import React from "react";

export default function Register() {
  return (
    <div className="page">
      <h2>Register</h2>
      <form>
        <label htmlFor="register-email">Email</label>
        <input id="register-email" type="email" />

        <label htmlFor="register-password">password</label>
        <input id="register-password" type="password" />
        <input id="password" placeholder="verify password" />
    
        <label htmlFor="register-display-name">Display Name</label>
        <input id="register-display-name" type="text" />

        <input></input>
      </form>
    </div>
  );
}
