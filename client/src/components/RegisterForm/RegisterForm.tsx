import React from "react";
import { FormField } from "../FormField";
import { Button } from "../Button";
import styles from "./RegisterForm.css";

export const RegisterForm = () => {
  return (
    <form className={styles.registerForm}>
      <FormField label="Имя">
        <input />
      </FormField>
      <FormField label="Email">
        <input />
      </FormField>
      <FormField label="Пароль">
        <input type="password" />
      </FormField>
      <Button>Зарегистрироваться</Button>
    </form>
  );
};
