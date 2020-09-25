import React from "react";
import PropTypes from "prop-types";
import { SpanDelBtn, ContactItemLi } from "../style/style";

const ContactItem = ({ c, removeContacts }) => {
  return (
    <ContactItemLi>
      <span className="item__name contact__item">{c.name}</span>
      <span className="item__country contact__item">{c.country}</span>
      <span className="item__position contact__item">{c.position}</span>
      <SpanDelBtn onClick={() => removeContacts(c.id)}></SpanDelBtn>
    </ContactItemLi>
  );
};

ContactItem.prototype = {
  c: PropTypes.object.isRequired,
};

export default ContactItem;
