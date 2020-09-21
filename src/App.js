import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger, Menu } from "./components";
import FocusLock from "react-focus-lock";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/Layout/Header";
import Axios from "axios";
import "./App.css";
import UserContext from "./context/UserContext";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "https://traffic-check.herokuapp.com/api/v1/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get(
          "https://traffic-check.herokuapp.com/api/v1/loggedIn_user",
          { headers: { "x-auth-token": token } }
        );
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

/**
 * <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        <div>
          <h1>Hello Purity Wambura My wife!. I love you very much Honey</h1>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/148/148836.svg"
            alt="Love icon"
          />
          <small>This is how much I love you honey</small>
        </div>
      </>
    </ThemeProvider>
 */
