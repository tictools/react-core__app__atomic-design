import type { BookStatus } from "../../../../core/Book/types";
import { BasicContainer } from "../../atoms/BasicContainer/BasicContainer";
import { StatusLabel } from "../../atoms/StatusLabel/StatusLabel";

type CardStatusProps = {
  customClassName?: string;
  status: BookStatus;
};

export const CardStatus = ({ customClassName, status }: CardStatusProps) => {
  return (
    <BasicContainer customClassName={customClassName}>
      <StatusLabel status={status} />
    </BasicContainer>
  );
};
