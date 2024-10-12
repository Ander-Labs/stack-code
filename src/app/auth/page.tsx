
import dynamic from "next/dynamic";

const TabsAuth = dynamic(() => import("@/components/pages/auth/tabsAuth"));

export default function page() {
  return (
    <>
      <section className="h-screen flex items-center justify-center">
        {/* <h2>Auth</h2> */}
        <TabsAuth />
      </section>
    </>
  );
}
