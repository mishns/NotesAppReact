import { default as React, useState } from "react";
import { LoginForm } from "../LoginForm";
import { RegisterForm } from "../RegisterForm";

import styles from "./AuthForm.css";

export const AuthForm = () => {
  const [authType, setAuthType] = useState<string>("register");

  const handleClick = () => {
    setAuthType(prevState => (prevState === "register" ? "auth" : "register"));
  };

  return (
    <div className={styles.authForm}>
      <p className={styles.authForm__title}>
        {authType === "register" ? "Регистрация" : "Авторизация"}
      </p>
      {authType === "register" ? <RegisterForm /> : <LoginForm />}
      <div className={styles.authForm__info}>
        <span>
          {authType === "register" ? "Уже есть аккаунт?" : "Ещё нет аккаунта?"}
        </span>
        <button className={styles.authForm__button} onClick={handleClick}>
          {authType === "register" ? "Войти" : "Создать аккаунт"}
        </button>
      </div>
    </div>
  );
};
