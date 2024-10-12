import { MonitorCog } from "lucide-react";

export default function PageConstruction() {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen">
        <MonitorCog className="w-32 h-32 text-muted-foreground" />
        <h2 className="text-2xl font-semibold text-muted-foreground w-3/5 text-center">
          Esta página aún está en construcción gracias por tu interes en Stack
          Code pronto estará disponible para todos.
        </h2>
      </section>
    </>
  );
}
