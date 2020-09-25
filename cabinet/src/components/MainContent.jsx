import React, { useState, useEffect } from "react";
import TutorialDataService from "../cervices/TutorialService";
import { MainWrapperContent } from "../style/style";
import Contacts from "./Contacts";
import { Form } from "./Form";

export const MainContent = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [contacts, setContacts] = useState([]);

  // получаем всё
  const getAllContacts = () => {
    TutorialDataService.getAll().then(
      (res) => {
        setIsLoaded(true);
        setContacts(res.data);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  };

  // удаляем любой
  const removeContacts = (id) => {
    TutorialDataService.remove(`${id}`)
      .then((res) => {
        const del = contacts.filter((c) => id !== c.id);
        setContacts(del);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    setTimeout(getAllContacts(contacts), 2500);
  }, [contacts]);

  if (error) {
    return <span>Ошибка: {error.message}</span>;
  } else if (!isLoaded) {
    return <span>Загрузка...</span>;
  } else
    return (
      <MainWrapperContent>
        <Contacts contacts={contacts} removeContacts={removeContacts} />
        <aside>
          <Form contacts={contacts} />
        </aside>
      </MainWrapperContent>
    );
};
