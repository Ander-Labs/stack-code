"use client";

import { nhost } from "@/lib/nhost";
import { NhostProvider } from "@nhost/nextjs";

export default function ProviderNhost({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NhostProvider nhost={nhost}>{children}</NhostProvider>
    </>
  );
}
