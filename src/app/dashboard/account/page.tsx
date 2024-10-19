import dynamic from "next/dynamic";

const CardAccount = dynamic(
  () => import("@/components/pages/dashboard/account/cardAccount")
);

export default function page() {
  return (
    <>
      <CardAccount />
    </>
  );
}
