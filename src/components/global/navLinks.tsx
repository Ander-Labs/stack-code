import Link from "next/link";

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
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function NavLinks() {
  return (
    <>
      {Links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
