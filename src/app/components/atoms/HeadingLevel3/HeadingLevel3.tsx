import { type ReactNode } from "react";

type HeadingLevel3Props = {
  customClassName?: string;
  children: ReactNode;
};

export const HeadingLevel3 = ({
  customClassName,
  children,
}: HeadingLevel3Props) => {
  return <h3 className={customClassName}>{children}</h3>;
};
