import React from "react";
import styled from "styled-components";

export default function Main() {
  return (
    <MainWrapper id="wrapper">
      <div className="container">Main</div>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  padding: 10px 0;
`;
