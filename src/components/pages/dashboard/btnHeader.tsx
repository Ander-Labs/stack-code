"use client";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const AddBtn = dynamic(() => import("./web/add/addBtn"));

export default function BtnHeader() {
  const Pathname = usePathname();
  // const isDashboard = usePathname.includes("/dashboard");
  return (
    <>
      {Pathname === "/dashboard" ? (
        <div className="flex gap-4">
          {" "}
          <AddBtn />{" "}
        </div>
      ) : Pathname === "/dashboard/web" ? (
        <AddBtn />
      ) : null}
    </>
  );
}
