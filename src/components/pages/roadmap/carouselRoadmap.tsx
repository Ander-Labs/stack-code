import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Cart {
  id: number;
  etapa: string;
  descripcion: string;
  fecha: string;
}

const CardInfo: Cart[] = [
  {
    id: 1,
    etapa: "Etapa 1",
    descripcion: "Descripción de la etapa 1",
    fecha: "01/01/2023",
  },
  {
    id: 2,
    etapa: "Etapa 2",
    descripcion: "Descripción de la etapa 2",
    fecha: "02/01/2023",
  },
  {
    id: 3,
    etapa: "Etapa 3",
    descripcion: "Descripción de la etapa 3",
    fecha: "03/01/2023",
  },
  {
    id: 4,
    etapa: "Etapa 4",
    descripcion: "Descripción de la etapa 4",
    fecha: "04/01/2023",
  },
];

export default function CarouselRoadmap() {
  return (
    <>
      <Carousel className="w-full max-w-sm">
        <CarouselContent className="-ml-1">
          {CardInfo.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <span>{item.etapa}</span>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-md font-semibold">
                      {item.descripcion}
                    </span>
                  </CardContent>
                  <CardFooter>
                    <span>{item.fecha} </span>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}

          
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
