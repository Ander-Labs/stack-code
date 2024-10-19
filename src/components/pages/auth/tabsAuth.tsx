import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FormRegister = dynamic(
  () => import("@/components/pages/auth/formRegister")
);
const FormLogin = dynamic(() => import("@/components/pages/auth/formLogin"));
const SignInGitHub = dynamic(() => import("./hook/signInGtHub"));

export default function tabsAuth() {
  return (
    <>
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Inicia Sesión</CardTitle>
              <CardDescription className="text-center">
                Inicia sesión con mail y contraseña o con tu cuenta de GitHub
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <FormLogin />
            </CardContent>
            <CardFooter className="flex justify-center items-center gap-3">
              <Button variant={"outline"}>
                {" "}
                <GitHubLogoIcon /> <span className="px-2">GitHub</span>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Crear Cuenta </CardTitle>
              <CardDescription className="text-center">
                Crea una cuenta en Stack Code con mail y contraseña o con tu
                cuenta de GitHub
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <FormRegister />
            </CardContent>
            <CardFooter className="flex justify-center items-center gap-3">
              <SignInGitHub />
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
