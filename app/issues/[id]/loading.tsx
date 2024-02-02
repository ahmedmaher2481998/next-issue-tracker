import LoadingSkeleton from "@/app/components/LoadingSkeleton";
import { Flex, Card } from "@radix-ui/themes";
// TODO
const LoadingIssueDetailsPage = () => {
  return (
    <>
      <div className="mt-4">
        <LoadingSkeleton height={32} className="max-w-lg" />

        <div className="mt-2 gap-4 flex  max-w-lg w-lg h-20 bg-green-500">
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>

        <Card className="prose lg:prose-lg mt-4 ">
          <LoadingSkeleton height={250} />
        </Card>
      </div>
    </>
  );
};

export default LoadingIssueDetailsPage;
