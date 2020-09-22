import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/Main";

function App(props) {
  const [login, setLogin] = useState(false);
  const handleLoginClick = () => {
    setLogin({ login: true });
    console.log("yes");
  };

  const handleLogoutClick = () => {
    setLogin({ login: false });
    console.log("no");
  };
  return (
    <>
      <Header
        login={login}
        handleLoginClick={handleLoginClick}
        handleLogoutClick={handleLogoutClick}
      />
      <Main login={login} />
    </>
  );
}

export default App;
