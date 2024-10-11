"use client";

import { HomeIcon, Route, Layers, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Link {
  name: string;
  href: string;
}

const Links: Link[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Roadmap",
    href: "/roadmap",
  },
  {
    name: "Stacks",
    href: "/stacks",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Icons: Record<string, JSX.Element> = {
  Home: <HomeIcon className="w-5 h-5" />,
  Roadmap: <Route className="w-5 h-5" />,
  Stacks: <Layers className="w-5 h-5" />,
  Contact: <Mail className="w-5 h-5" />,
};

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {Links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-sm ${
            pathname === link.href ? "text-primary" : "text-muted-foreground"
          } `}
        >
          <span>{Icons[link.name]}</span>
          {link.name}
        </Link>
      ))}
    </>
  );
}
