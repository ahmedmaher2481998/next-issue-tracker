import { Table } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import LinkComponent from "../components/LinkComponent";
import StatusBadge from "../components/StatusBadge";
import delay from "delay";
import { Suspense } from "react";
import { unstable_noStore } from "next/cache";
import LoadingPage from "./loading";
import IssuesActions from "./IssuesActions";

const getIssues = async () => {
  unstable_noStore();

  delay(2000);
  return await prisma.issue.findMany();
};

const IssuesPage = async () => {
  const issues = await getIssues();

  return (
    <div>
      <IssuesActions />

      <Table.Root variant="surface" mt={"4"} className="max-w-2xl">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Create
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Suspense fallback={<LoadingPage />}>
            {issues.map(({ id, createdAt, title, status }) => {
              return (
                <Table.Row key={id}>
                  <Table.Cell>
                    <LinkComponent href={`/issues/${id}`}>
                      {title}
                      <div className="block mt-1 md:hidden">
                        <StatusBadge status={status} />
                      </div>
                    </LinkComponent>
                  </Table.Cell>
                  <Table.Cell className="hidden md:table-cell">
                    <StatusBadge status={status} />
                  </Table.Cell>
                  <Table.Cell className="hidden md:table-cell">
                    {createdAt.toDateString()}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Suspense>
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
