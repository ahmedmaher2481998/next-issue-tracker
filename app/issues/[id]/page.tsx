import StatusBadge from "@/app/components/StatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  params: { id: string };
  children: ReactNode;
};

const getIssue = (id: number) => prisma.issue.findUnique({ where: { id } });

const IssueDetailsPage = async ({ params: { id }, children }: Props) => {
  if (!Number.isInteger(parseInt(id))) notFound();

  const issue = await getIssue(parseInt(id));
  if (!issue) notFound();

  return (
    <div className="mt-4">
      <Heading size={"8"} as="h1">
        {issue.title}
      </Heading>

      <Flex gap={"4"} mt={"2"} ml={"2"}>
        <StatusBadge status={issue.status} />
        <p> {issue.createdAt.toDateString()} </p>
      </Flex>

      <Card className="prose lg:prose-lg mt-4 ">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailsPage;
