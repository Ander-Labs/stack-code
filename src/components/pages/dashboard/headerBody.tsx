"use client";
import { usePathname } from "next/navigation";

interface href {
  href: string;
  title: string;
}

const links: href[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "web",
    href: "/dahboard/web",
  },
  {
    title: "mobile",
    href: "/dahboard/mobile",
  },
  {
    title: "desktop",
    href: "/dahboard/desktop",
  },
];

export default function HeaderBody() {
  const pathName = usePathname();

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl text-primary">
          {pathName === links[0].href ? links[0].title : pathName}
        </h1>
      </div>
    </>
  );
}
