"use client";
import { useUserState } from "@/client/auth/userSate";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BtnLogout from "@/components/pages/auth/btnLogout";
import SheetAccountEdict from "./SheetAccountEdict";

export default function CardAccount() {
  const user = useUserState((state) => state.user);
  // console.log(user);

  // Filtramos los roles secundarios, excluyendo el defaultRole
  const otherRoles = user?.roles?.filter((role) => role !== user?.defaultRole);

  return (
    <>
      <Card>
        <CardHeader className="flex flex-col justify-center items-center">
          <Avatar className="w-24 h-24 rounded-full">
            <AvatarImage
              src={user?.avatarUrl || "https://github.com/Ander-Labs.png"}
              alt={user?.displayName}
            />
            <AvatarFallback>{user?.displayName}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-md text-black dark:text-white gap-3 text-center ">
            {user?.id || "No disponible"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md text-black dark:text-white gap-3 ">
            <span className="text-primary font-semibold ">User Name:</span>{" "}
            {user?.displayName || "Sin Nombre de usuario"}
          </p>

          <p className="text-black dark:text-white gap-3 text-md">
            <span className="text-primary font-semibold ">Mail:</span>{" "}
            {user?.email || "No disponible"}
          </p>
          <p className="text-black dark:text-white gap-3 text-md">
            <span className="text-primary font-semibold ">Rol:</span>{" "}
            {user?.defaultRole || "No disponible"}{" "}
          </p>
          <p className="text-black dark:text-white gap-3 text-md">
            <span className="text-primary font-semibold ">Registro :</span>{" "}
            {user?.createdAt || "No disponible"}{" "}
          </p>
          <p className="text-black dark:text-white gap-3 text-md">
            <span className="text-primary font-semibold ">Otros Roles:</span>{" "}
            {otherRoles && otherRoles.length > 0
              ? otherRoles.join(", ")
              : "No disponible"}{" "}
          </p>
        </CardContent>
        <CardFooter className="flex justify-around items-center">
          <BtnLogout />

          <SheetAccountEdict />
        </CardFooter>
      </Card>
    </>
  );
}
