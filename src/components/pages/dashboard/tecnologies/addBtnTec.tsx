import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import {
  Sheet,
  // SheetClose,
  SheetContent,
  SheetDescription,
  // SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
const AddTecnologies = dynamic(() => import("./addTecnologies"));

export default function AddBtnTec() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="flex  justify-center items-center bg-primary"
          >
            <Plus />
            <span>Add Tec</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Agregar Nueva tecnologia</SheetTitle>
            <SheetDescription>
              Agrega una nueva tecnologia a la base de datos
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <AddTecnologies />
          </div>
          {/* <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter> */}
        </SheetContent>
      </Sheet>
    </>
  );
}
