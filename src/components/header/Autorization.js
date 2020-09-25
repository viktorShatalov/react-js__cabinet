import React from "react";

export const Autorization = (props) => {
  const islogin = props.login;
  if (islogin) {
    return <span className="header__info">Добро пожаловать!</span>;
  }
  return <span className="header__info">Авторизируйтесь</span>;
};
