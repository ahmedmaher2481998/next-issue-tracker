import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

const LinkComponent = ({ children, href }: Props) => {
  return (
    <>
      <NextLink href={href} legacyBehavior passHref>
        <RadixLink>{children}</RadixLink>
      </NextLink>
    </>
  );
};

export default LinkComponent;
