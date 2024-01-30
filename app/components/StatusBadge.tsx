import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

type StatusMapper = Record<
  Status,
  { label: String; color: "red" | "green" | "violet" }
>;
const statusMapper: StatusMapper = {
  CLOSED: {
    color: "green",
    label: "Closed",
  },
  IN_PROGRESS: {
    color: "violet",
    label: "In Progress",
  },
  OPEN: {
    color: "red",
    label: "Open",
  },
};
const StatusBadge = ({ status }: { status: Status }) => {
  const { color, label } = statusMapper[status];
  return <Badge color={color}>{label}</Badge>;
};

export default StatusBadge;
