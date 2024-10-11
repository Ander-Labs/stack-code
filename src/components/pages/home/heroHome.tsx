import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroHome() {
  return (
    <>
      <section className="w-full py-16 md:py-32 flex flex-col justify-center items-center ">
        <div className="w-5/6 md:w-3/5 flex flex-col justify-center items-center">
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-6xl px-4">
            Descubre y comparte{" "}
            <span className="text-primary">stacks tecnológicos</span> en un solo
            lugar <span className="text-primary">Stack Code</span>
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-center md:w-3/5">
            Una plataforma de código abierto diseñada para que desarrolladores
            de todos los niveles compartan y descubran stacks tecnológicos
            usados en diferentes proyectos.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-grow justify-center ">
          <Button asChild size="lg" className="mt-2 text-white p-4 px-6 ">
            <Link href="/stacks">Explorar Stacks</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="mt-2 text-white ml-2 p-4 px-6 text-muted-foreground "
          >
            <Link href={"/auth"}> Compartir mi Stack</Link>
          </Button>
        </div>
        <span className="w-4/5 text-xs text-center mt-4 text-muted-foreground">
          Probamos y centralizamos stacks tecnológicos de la web, para que
          puedas aprender, colaborar y usar las mejores herramientas en tus
          proyectos.
        </span>
      </section>
    </>
  );
}
