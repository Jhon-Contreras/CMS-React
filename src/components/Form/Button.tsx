import React, { type ReactNode } from "react";

type variant = "primary" | "secondary" | "warning";
type buttonType = "button" | "submit";
type Props = {
  variant?: variant;
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: buttonType;
};

const Button = ({
  variant = "primary",
  children,
  onClick,
  type = "button",
}: Props) => {
  return (
    <button onClick={onClick} type={type} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};

export default Button;
