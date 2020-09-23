import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 20px 0;
  box-shadow: 0 2px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  width: 220px;
  display: block;
  padding: 5px 0;
  text-align: center;
  background-color: white;
  outline: none;
  border: 1px solid #5181b8;
  border-radius: 4px;
  margin: 20px auto 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #5181b8;
    color: white;
    border-color: #5181b8;
  }
`;
export const MainWrapper = styled.main`
  padding: 10px 0;
`;
export const SpanText = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 50px;
  display: inline-block;
`;
export const MainWrapperContent = styled.section`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 10px;
`;
export const InputControl = styled.input`
  width: 100%;
  max-width: 500px;
  display: inline-block;
  background-color: transparent;
  border: 1px solid #333333;
  padding: 7px 15px;
  border-radius: 4px;
`;
export const FormControl = styled.form`
  width: 100%;
  max-width: 500px;
  display: inline-block;
  background-color: transparent;
  border: 1px solid #333333;
  padding: 20px 15px;
  border-radius: 4px;
  height: 125px;
`;
export const ContactItemsUl = styled.ul`
  width: 100%;
  max-width: 750px;
`;
export const ContactItemLi = styled.li`
  padding: 5px 0 5px 10px;
  list-style: none;
  border-bottom: 1px solid #333333;
  margin-bottom: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr) 20px;
  justify-items: center;
`;
export const SpanDelBtn = styled.span`
  position: relative;
  width: 20px;
  height: 100%;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 5px;
    width: 10px;
    height: 1px;
    background-color: #333333;
    transform: rotate(45deg);
    display: block;
  }
  &::after {
    content: "";
    position: absolute;
    top: 8px;
    left: 5px;
    width: 10px;
    height: 1px;
    background-color: #333333;
    transform: rotate(-45deg);
    display: block;
  }
`;
