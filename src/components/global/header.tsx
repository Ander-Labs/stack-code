"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const ModeToggle = dynamic(() => import("./modeToggle"));
const NavLinks = dynamic(() => import("./navLinks"));

export default function Header() {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) return null;

  return (
    <>
      <header className="flex justify-around items-center py-1 border-b">
        <div className="flex justify-around items-center">
          <Link href="/" className="text-3xl font-bold">
            Stack Code
          </Link>
          <nav className="hidden md:flex items-center gap-4 px-2 lg:h-[60px] lg:px-6">
            <NavLinks />
          </nav>
        </div>
        <div className="flex justify-around items-center gap-4">
          <Button variant={"outline"}>
            <a href="https://github.com/Ander-Labs/stack-code" target="_blank">
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
          </Button>
          <ModeToggle />
        </div>
      </header>
    </>
  );
}
