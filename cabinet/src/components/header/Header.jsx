import React from "react";
import { Button, HeaderWrapper } from "../../style/style";
import { Autorization } from "./Autorization";

export default function Header(props) {
  return (
    <HeaderWrapper id="header">
      <div className="container">
        <Autorization login={props.login} />
        {props.login ? (
          <Button onClick={props.handleLoginClick}>Выйти</Button>
        ) : (
          <Button onClick={props.handleLogoutClick}>Войти</Button>
        )}
      </div>
    </HeaderWrapper>
  );
}
