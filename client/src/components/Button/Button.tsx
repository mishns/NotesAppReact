import { default as React, FC, HTMLAttributes } from "react";
import { Loader } from "../Loader";
import styles from "./Button.css";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  handleClick?: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  kind?: "primary" | "secondary";
  type?: "submit" | "reset" | "button";
}

export const Button: FC<IButtonProps> = ({
  handleClick,
  isLoading,
  isDisabled = isLoading,
  children,
  className,
  kind = "primary",
  type,
  ...props
}) => {
  return (
    <button
      disabled={isDisabled}
      type={type}
      className={styles.button}
      data-kind={kind}
      {...props}
      onClick={handleClick}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};
