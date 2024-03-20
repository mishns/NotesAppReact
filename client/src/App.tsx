import React, { FC } from "react";
import styles from "./App.css";
import { Content } from "@components/Content";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className={styles.app}>
      <Content />
    </div>
  );
};

export default App;
