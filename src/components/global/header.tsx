"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, Package2 } from "lucide-react";
const ModeToggle = dynamic(() => import("./modeToggle"));

export default function Header() {
  const pathname = usePathname();
  if (pathname === "/dashboard") return null;

  return (
    <>
      <header className="flex justify-around items-center py-4 border-b">
        <div className="flex flex-col">
          <nav className="flex h-14 items-center gap-4 px-2 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold hover:text-primary"
                  >
                    <Package2 className="h-6 w-6" />
                    <span>Stack Code</span>
                  </Link>
                  {/* <NavLinks /> */}
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
        <h2 className="text-3xl font-bold">Stack Code</h2>

        <ModeToggle />
      </header>
    </>
  );
}
