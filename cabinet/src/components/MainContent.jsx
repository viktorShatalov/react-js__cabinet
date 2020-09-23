import React, { useState, useEffect } from "react";
import { MainWrapperContent } from "../style/style";
import Contacts from "./Contacts";
import { Form } from "./Form";

export const MainContent = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setContacts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const addNewItem = (e) => {
    setContacts([
      ...contacts,
      {
        id: 6,
        name: "contact 6",
        country: "country 1",
        position: "front 1",
      },
    ]);
    e.preventDefault();
  };
  const handleRemoveItme = (e) => {
    const name = e.target.getAttribute("name");
    setContacts(contacts.filter((item) => item.name !== name));
  };
  if (error) {
    return <span>Ошибка: {error.message}</span>;
  } else if (!isLoaded) {
    return <span>Загрузка...</span>;
  } else
    return (
      <MainWrapperContent>
        <Contacts contacts={contacts} handleRemoveItme={handleRemoveItme} />
        <Form addNewItem={addNewItem} />
      </MainWrapperContent>
    );
};
