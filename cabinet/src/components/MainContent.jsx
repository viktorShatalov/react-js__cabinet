import React from "react";
import { MainWrapperContent } from "../style/style";
import Contacts from "./Contacts";
import { Form } from "./Form";

export const MainContent = () => {
  const contacts = [
    {
      id: 1,
      name: `contact 1`,
      country: "country 1",
      position: "front 1",
    },
    {
      id: 2,
      name: `contact 2`,
      country: "country 2",
      position: "front 2",
    },
    {
      id: 3,
      name: `contact 3`,
      country: "country 3",
      position: "front 3",
    },
    {
      id: 4,
      name: `contact 4`,
      country: "country 4",
      position: "front 4",
    },
    {
      id: 5,
      name: `contact 5`,
      country: "country 5",
      position: "front 5",
    },
    {
      id: 6,
      name: `contact 6`,
      country: "country 6",
      position: "front 6",
    },
  ];
  return (
    <MainWrapperContent>
      <Contacts contacts={contacts} />
      <Form />
    </MainWrapperContent>
  );
};
