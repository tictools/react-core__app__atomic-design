import { type ReactNode } from "react";

type TextBlockProps = {
  customClassName?: string;
  children: ReactNode;
};

export const TextBlock = ({ customClassName, children }: TextBlockProps) => {
  return <p className={customClassName}>{children}</p>;
};
