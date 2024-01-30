import { Text } from "@radix-ui/themes";
import { ReactNode } from "react";

const ErrorMessage = ({ children }: { children: ReactNode }) => {
  if (!children) return null;
  return (
    <>
      <Text color="red" as="p">
        {children}
      </Text>
    </>
  );
};

export default ErrorMessage;
