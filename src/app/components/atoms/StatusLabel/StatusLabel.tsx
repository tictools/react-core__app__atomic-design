import { InlineText } from "../InlineText/InlineText";

import type { BookStatus } from "../../../../core/Book/types";
import styles from "./StatusLabel.module.css";

type StatusLabelProps = {
  status: BookStatus;
};

export const StatusLabel = ({ status }: StatusLabelProps) => {
  const statusClassName: Record<string, string> = {
    read: styles["label__status--read"],
    inProgress: styles["label__status--in-progress"],
    pending: styles["label__status--pending"],
  };

  const getStatusClass = (status: string) => {
    return statusClassName[status] || "";
  };

  const formatStatus = (currentStatus: BookStatus) =>
    currentStatus === "inProgress" ? "in progress" : currentStatus;

  return (
    <InlineText
      customClassName={`${styles["label__status"]} ${getStatusClass(status)}`}
    >
      {formatStatus(status)}
    </InlineText>
  );
};
