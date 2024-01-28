"use client";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import { cn } from "../utils";
import { usePathname } from "next/navigation";
const links = [
  { label: "dashboard", href: "/" },
  { label: "issues", href: "/issues" },
];

const NavBar = () => {
  const currentPathName = usePathname();
  console.log(currentPathName);
  return (
    <nav className="px-8 space-x-5 border-b-2 h-14  flex items-center ">
      <Link href={"/"}>
        <AiFillBug size={36} />
      </Link>

      <ul className="flex space-x-5">
        {links.map(({ href, label }) => (
          <Link
            className={cn(
              "transition-colors text-zinc-400  hover:text-zinc-800",
              {
                "text-zinc-800 underline underline-offset-2":
                  currentPathName === href,
              }
            )}
            key={href}
            href={href}
          >
            {label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
