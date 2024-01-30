import { Button } from "@radix-ui/themes";
import { IoMdAdd } from "react-icons/io";

import React from "react";
import Link from "next/link";

const IssuesPage = () => {
  return (
    <div>
      <Button>
        <Link href={"/issues/new"} className="flex gap-2 items-center">
          <IoMdAdd width="16" height="16" />
          New
        </Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
