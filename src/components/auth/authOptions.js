import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function authOptions() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { userData, setUserData } = useContext(UserContext);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();
  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  return (
    <nav className="auth-options">
      {userData.user ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        <>
          <button onClick={register}>Register</button>
          <button onClick={login}>Log in</button>
        </>
      )}
    </nav>
  );
}
