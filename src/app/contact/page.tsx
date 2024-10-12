import dynamic from "next/dynamic";

const PageConstruction = dynamic(
  () => import("@/components/global/pageConstruction")
);

export default function page() {
  return (
    <>
      <PageConstruction />
    </>
  );
}
