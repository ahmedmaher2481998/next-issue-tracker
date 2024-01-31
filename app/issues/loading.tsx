import { Table } from "@radix-ui/themes";
import { ReactNode } from "react";

import Skeleton from "react-loading-skeleton";
import IssuesActions from "./IssuesActions";
// TODO
//  test the loading page with out the suspense boundary
const LoadingPage = () => {
  return (
    <>
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
            <LoadingPart />
          </Table.Body>
        </Table.Root>
      </div>
    </>
  );
};

const LoadingPart = (): JSX.Element => {
  const arr = [50, 30, 35, 20];
  return (
    <>
      {arr.map((k) => (
        <Table.Row key={k}>
          <Table.Cell>
            <Skeleton width={k + 50 + "%"} />
          </Table.Cell>
          <Table.Cell className="hidden md:table-cell">
            <Skeleton width={k - 10 + "%"} />
          </Table.Cell>
          <Table.Cell className="hidden md:table-cell">
            <Skeleton width={k + "%"} />
          </Table.Cell>
        </Table.Row>
      ))}
    </>
  );
};

export default LoadingPage;
