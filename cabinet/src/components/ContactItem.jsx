import React from "react";
import PropTypes from "prop-types";
import { SpanDelBtn, ContactItemLi } from "../style/style";

const ContactItem = ({ c, handleRemoveItme }) => {
  return (
    <ContactItemLi>
      <span>{c.name}</span>
      <span>{c.country}</span>
      <span>{c.position}</span>
      <SpanDelBtn name={c.name} onClick={handleRemoveItme}></SpanDelBtn>
    </ContactItemLi>
  );
};

ContactItem.prototype = {
  c: PropTypes.object.isRequired,
};

export default ContactItem;
