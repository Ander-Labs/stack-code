import dynamic from "next/dynamic";

import ProviderNhost from "@/components/global/providerNhost";
const TabsAuth = dynamic(() => import("@/components/pages/auth/tabsAuth"));

export default function page() {
  return (
    <>
      <ProviderNhost>
        <section className="h-screen flex items-center justify-center">
          {/* <h2>Auth</h2> */}
          <TabsAuth />
        </section>
      </ProviderNhost>
    </>
  );
}
