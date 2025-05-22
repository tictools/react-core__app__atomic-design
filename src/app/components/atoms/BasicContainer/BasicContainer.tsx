import type { ReactNode } from "react";

type TextBlockProps = {
  customClassName?: string;
  children: ReactNode;
};

export const BasicContainer = ({
  customClassName,
  children,
}: TextBlockProps) => {
  return <div className={customClassName}>{children}</div>;
};
