import React from "react";
import { InputControl, FormControl, Button } from "../style/style";

export const Form = ({ addNewItem }) => {
  return (
    <FormControl>
      <InputControl type="text" placeholder="Новый контакт" />
      <Button onClick={addNewItem}>Добавить</Button>
    </FormControl>
  );
};
