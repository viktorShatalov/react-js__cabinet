import React from "react";
import PropTypes from "prop-types";
import { ContactItemsUl, ContactItemsHead } from "../style/style";
import ContactItem from "./ContactItem";

const Contacts = ({ contacts, removeContacts }) => {
  return (
    <article>
      <ContactItemsHead>
        <span>Имя</span>
        <span>Страна</span>
        <span>Должность</span>
      </ContactItemsHead>
      <ContactItemsUl>
        {contacts.map((c) => (
          <ContactItem c={c} removeContacts={removeContacts} key={c.id} />
        ))}
      </ContactItemsUl>
    </article>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Contacts;
