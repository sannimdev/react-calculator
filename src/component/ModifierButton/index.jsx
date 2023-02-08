import React from "react";
import styles from "./index.module.css";

function ModifierButton({ children }) {
  return <button className={styles.operation}>{children}</button>;
}

export default ModifierButton;
