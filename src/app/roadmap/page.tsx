import dynamic from "next/dynamic";

const PageConstruction = dynamic(
  () => import("@/components/global/pageConstruction")
);
// const HeroRoadmap = dynamic(
//   () => import("@/components/pages/roadmap/heroRoadmap")
// );

export default function page() {
  return (
    <>
      {/* <h2>Bienvenido ha la pagina de Roadmap</h2> */}
      {/* <HeroRoadmap /> */}
      <PageConstruction />
    </>
  );
}
