import React, { FC } from "react";
import styles from "./App.css";
import { AuthForm } from "./components/AuthForm";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className={styles.app}>
      <AuthForm />
    </div>
  );
};

export default App;
