import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/Main";

function App() {
  const [login, setLogin] = useState(false);
  const handleLoginClick = () => {
    setLogin(false);
  };

  const handleLogoutClick = () => {
    setLogin(true);
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
