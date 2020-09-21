import React, { useState } from "react";
import styled from "styled-components";

export default function Header(props) {
  const [login, setLogin] = useState(false);

  const getLogin = () => {
    setLogin(true);
    console.log(login);
  };

  return (
    <HeaderWrapper id="header">
      <div className="container">
        <Head>Добро пожаловать в приложение!</Head>
        <Button onClick={getLogin}>Войти</Button>
      </div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  padding: 20px 0;
  box-shadow: 0 2px 4px 4px rgba(0, 0, 0, 0.2);
`;

const Head = styled.h1`
  font-size: 20px;
  width: 100%;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100px;
  display: block;
  padding: 5px 0;
  text-align: center;
  background-color: white;
  outline: none;
  border: 1px solid rgb(51, 51, 51);
  border-radius: 4px;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: green;
    color: white;
    border-color: green;
  }
`;
