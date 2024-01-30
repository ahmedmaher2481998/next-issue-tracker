import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

const IssuesActions = () => {
  return (
    <>
      <Button>
        <Link href={"/issues/new"} className="flex gap-2 items-center">
          <IoMdAdd width="16" height="16" />
          New
        </Link>
      </Button>
    </>
  );
};

export default IssuesActions;
