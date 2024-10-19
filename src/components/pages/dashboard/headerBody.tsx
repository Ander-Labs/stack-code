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
    title: "Web",
    href: "/dashboard/web",
  },
  {
    title: "Mobile",
    href: "/dashboard/mobile",
  },
  {
    title: "Desktop",
    href: "/dashboard/desktop",
  },
  {
    title: "Account",
    href: "/dashboard/account",
  },
];

export default function HeaderBody() {
  const pathName = usePathname();

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl text-primary">
          {links.map((link, index) => (
            <span key={index}>{pathName === link.href ? link.title : ""}</span>
          ))}
        </h1>
      </div>
    </>
  );
}
