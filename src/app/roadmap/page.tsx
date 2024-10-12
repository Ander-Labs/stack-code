import dynamic from "next/dynamic";

const PageConstruction = dynamic(
  () => import("@/components/global/pageConstruction")
);

export default function page() {
  return (
    <>
      {/* <h2>Bienvenido ha la pagina de Roadmap</h2> */}
      <PageConstruction/>
    </>
  );
}
