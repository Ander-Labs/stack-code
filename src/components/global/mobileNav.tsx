"use client";
import { HomeIcon, Route, Layers, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardIcon, DesktopIcon, MobileIcon } from "@radix-ui/react-icons";
import { PanelsTopLeft } from "lucide-react";

export interface ItemsNav {
  name: string;
  href: string;
}

export const NavItems: ItemsNav[] = [
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
  Home: <HomeIcon />,
  Roadmap: <Route />,
  Stacks: <Layers />,
  Contact: <Mail />,
};

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
    name: "web",
    href: "/dahboard/web",
    icon: <PanelsTopLeft className="h-6 w-6" />,
  },
  {
    name: "mobile",
    href: "/dahboard/mobile",
    icon: <MobileIcon className="h-6 w-6" />,
  },
  {
    name: "desktop",
    href: "/dahboard/desktop",
    icon: <DesktopIcon className="h-6 w-6" />,
  },
];

export default function NavMobile() {
  const pathname = usePathname();
  
  const isDashboardRoute = pathname.startsWith("/dashboard");
  return (
    <>
      <header className="sticky bottom-0 left-0 right-0 z-50 block md:hidden h-16 gap-4 border-t bg-background px-4 md:px-6 pt-2">
        <nav className="flex justify-around items-center gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          {!isDashboardRoute ? (
            <>
              {NavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-muted-foreground transition-colors hover:text-foreground flex flex-col justify-center items-center ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  <span>{Icons[item.name]}</span>
                  {item.name}
                </Link>
              ))}
            </>
          ) : (
            <>
              {Links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-muted-foreground transition-colors hover:text-foreground flex flex-col justify-center items-center ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </>
          )}
        </nav>
      </header>
    </>
  );
}
