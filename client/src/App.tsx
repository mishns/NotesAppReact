import React from "react";
import styles from "./App.css";
import { AuthForm } from "./components/AuthForm";

function App() {
  return (
    <div className={styles.app}>
      <AuthForm />
    </div>
  );
}

export default App;
