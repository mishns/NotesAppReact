import { default as React, FC, ReactNode } from "react";
import styles from "./FormField.css";

interface IFormFieldProps {
  label: string;
  children: ReactNode;
  errorMessage?: string;
}

export const FormField: FC<IFormFieldProps> = ({
  children,
  label,
  errorMessage,
}) => {
  return (
    <label className={styles.formField}>
      <span className={styles.formField__label}>{label}</span>
      {children}
      {errorMessage && (
        <span className={styles.formField__errorText}>{errorMessage}</span>
      )}
    </label>
  );
};
