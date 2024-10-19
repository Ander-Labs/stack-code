import Link from "next/link";
import { Bell, Layers3 } from "lucide-react";
import { Button } from "@/components/ui/button";

import dynamic from "next/dynamic";
import ProviderNhost from "@/components/global/providerNhost";
import ProviderTQuery from "@/components/global/providerTQuery";

const NavLinks = dynamic(() => import("./navLinks"));
const Body = dynamic(() => import("./body"));
const CardSponsors = dynamic(() => import("./cardSponsors"));
const InputSearch = dynamic(() => import("./inputSearch"));
const ModeToggle = dynamic(() => import("@/components/global/modeToggle"));
const UserMenu = dynamic(() => import("./userMenu"));

export default function HeaderDashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Layers3 className="h-6 w-6" />
              <span className="">Stack Code</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <NavLinks />
            </nav>
          </div>
          <div className="mt-auto p-4">
            <CardSponsors />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="w-full flex-1">
            <InputSearch />
          </div>
          <UserMenu />
          <ModeToggle />
        </header>
        <ProviderTQuery>
        <ProviderNhost>
          <Body>{children}</Body>
          </ProviderNhost>
        </ProviderTQuery>
      </div>
    </div>
  );
}
