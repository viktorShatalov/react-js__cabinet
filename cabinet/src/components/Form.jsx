import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TutorialDataService from "../cervices/TutorialService";
import { InputControl, FormControl, Button } from "../style/style";

export const Form = ({ resetInputs }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    TutorialDataService.create(data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // добовляем новый

  return (
    <FormControl onSubmit={handleSubmit(onSubmit)}>
      <InputControl
        type="text"
        placeholder="Введите имя"
        name="name"
        ref={register}
        defaultValue=""
        required
      />
      <InputControl
        type="text"
        placeholder="Введите страну"
        name="country"
        ref={register}
        defaultValue=""
      />
      <InputControl
        type="text"
        placeholder="Введите должность"
        name="position"
        ref={register}
        defaultValue=""
      />
      <Button>Добавить</Button>
    </FormControl>
  );
};
