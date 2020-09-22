import React from "react";
import PropTypes from "prop-types";
import { ContactItemsUl } from "../style/style";
import ContactItem from "./ContactItem";

const Contacts = ({ contacts }) => {
  return (
    <ContactItemsUl>
      {contacts.map((c) => (
        <ContactItem c={c} key={c.id} />
      ))}
    </ContactItemsUl>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Contacts;
