import React, { useState, useContext } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
export default function Register() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [username, setUsername] = useState();
  const { setUserData } = useContext(UserContext);
  const history = useHistory();
  // Create a function that submits a form
  const submit = async (e) => {
    e.preventDefault();
    const newUser = {
      firstname,
      lastname,
      username,
      email,
      password,
      passwordCheck,
    };

    await Axios.post(
      "https://traffic-check.herokuapp.com/api/v1/register",
      newUser
    );

    console.log(newUser)
  };

  return (
    <div className="page">
      <h2>Register</h2>
      <form onSubmit={submit}>
        <label htmlFor="register-firstname">First Name</label>
        <input
          id="register-firstname"
          type="text"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <label htmlFor="register-lastname">Last Name</label>
        <input
          id="register-lastname"
          type="text"
          onChange={(e) => setLastname(e.target.value)}
        />
        <label htmlFor="register-username">Username</label>
        <input
          id="register-username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="register-password">password</label>
        <input
          id="register-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          id="password"
          placeholder="verify password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />

        <button type="submit" onClick={submit}>
          Register
        </button>
      </form>
    </div>
  );
}
