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
const AddForm = dynamic(() => import("./addForm"));

export default function AddBtn() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="flex  justify-center items-center bg-blue-600"
          >
            <Plus />
            <span>Add web</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Comparte un Stack Web</SheetTitle>
            <SheetDescription>
              Comparte un stack para desarrollo web
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <AddForm />
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
