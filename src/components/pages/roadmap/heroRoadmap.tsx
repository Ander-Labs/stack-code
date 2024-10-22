import dynamic from "next/dynamic";

const CarouselRoadmap = dynamic(() => import("./carouselRoadmap"));

export default function HeroRoadmap() {
  return (
    <>
      <section className="h-screen flex flex-col  justify-center items-center">
        <h2 className="text-primary text-4xl font-bold mb-8">
          Roadmap Stack Code
        </h2>
        <CarouselRoadmap />
      </section>
    </>
  );
}
