"use client";
import { DashboardIcon, DesktopIcon, MobileIcon } from "@radix-ui/react-icons";
import { PanelsTopLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Link {
  href: string;
  name: string;
  icon: React.ReactNode;
}

const Links: Link[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon className="h-6 w-6" />,
  },
  {
    name: "Web",
    href: "/dashboard/web",
    icon: <PanelsTopLeft className="h-6 w-6" />,
  },
  {
    name: "Mobile",
    href: "/dashboard/mobile",
    icon: <MobileIcon className="h-6 w-6" />,
  },
  {
    name: "Desktop",
    href: "/dashboard/desktop",
    icon: <DesktopIcon className="h-6 w-6" />,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {Links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
            pathname === link.href ? "bg-muted  dark:text-white" : ""
          } `}
        >
          {link.icon}
          {link.name}
        </Link>
      ))}
    </>
  );
}
