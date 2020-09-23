import React from "react";
import PropTypes from "prop-types";
import { ContactItemsUl } from "../style/style";
import ContactItem from "./ContactItem";

const Contacts = ({ contacts, handleRemoveItme }) => {
  return (
    <ContactItemsUl>
      {contacts.map((c) => (
        <ContactItem
          contacts={contacts}
          handleRemoveItme={handleRemoveItme}
          c={c}
          key={c.id}
        />
      ))}
    </ContactItemsUl>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Contacts;
