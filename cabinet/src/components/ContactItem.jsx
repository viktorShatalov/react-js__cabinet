import React from "react";
import PropTypes from "prop-types";
import { SpanDelBtn, ContactItemLi } from "../style/style";

const ContactItem = (props) => {
  return (
    <ContactItemLi>
      <span>{props.c.name}</span>
      <span>{props.c.country}</span>
      <span>{props.c.position}</span>
      <SpanDelBtn></SpanDelBtn>
    </ContactItemLi>
  );
};

ContactItem.prototype = {
  c: PropTypes.object.isRequired,
};

export default ContactItem;
