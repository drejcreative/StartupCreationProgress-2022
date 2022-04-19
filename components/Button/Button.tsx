import React from "react";
import { Loader } from "../Loader/Loader";

import style from "./Button.module.scss";

interface Props {
  text: string;
  onClick?: () => void;
  primary?: boolean;
  secoundary?: boolean;
  terniary?: boolean;
  error?: boolean;
  thin?: boolean;
  small?: boolean;
  disabled?: boolean;
  loading?: boolean;
  fullsize?: boolean;
  className?: string;
  icon?: React.ReactNode;
  inlineStyle?: React.CSSProperties;
}

const Button = ({
  text,
  primary,
  secoundary,
  error,
  thin,
  small,
  fullsize,
  disabled,
  inlineStyle,
  loading,
  onClick,
  icon,
  className,
}: Props) => {
  return (
    <button
      className={` ${style.button} ${primary ? style.primary : ""} ${
        secoundary ? style.secoundary : ""
      }
        ${fullsize ? style.fullsize : ""}
        ${error ? style.error : ""}
        ${disabled ? style.disabled : ""} ${thin ? style.thin : ""} ${
        small ? style.small : ""
      } ${className} `}
      style={inlineStyle}
      type="submit"
      onClick={disabled || loading ? () => {} : onClick}
    >
      {loading && <Loader small />}
      {!!icon && <span className={style.icon}>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
