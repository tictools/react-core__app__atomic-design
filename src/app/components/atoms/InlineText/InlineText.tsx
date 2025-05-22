import { type ReactNode } from "react";

type InlineTextProps = {
  customClassName?: string;
  children: ReactNode;
};

export const InlineText = ({ customClassName, children }: InlineTextProps) => {
  return <span className={customClassName}>{children}</span>;
};
