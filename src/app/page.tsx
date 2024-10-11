// import Image from "next/image";
import dynamic from "next/dynamic";

const HeroHome = dynamic(() => import("@/components/pages/home/heroHome"));

export default function Home() {
  return (
    <>
      <HeroHome />
    </>
  );
}
