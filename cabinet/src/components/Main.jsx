import React from "react";
import { MainWrapper, SpanText } from "../style/style";
import { MainContent } from "./MainContent";

export default function Main(props) {
  return (
    <MainWrapper id="wrapper">
      <div className="container">
        {!props.login ? <SpanText>Авторизируйтесь</SpanText> : <MainContent />}
      </div>
    </MainWrapper>
  );
}
