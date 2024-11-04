import {
  signInWithPopup,
  GithubAuthProvider
} from "firebase/auth";
import { Auth } from "@/config/firebase/firebaseConfig"; // Asegúrate de que esto esté correcto
// import { useUserState } from "@/client/auth/userSate";

const provider = new GithubAuthProvider();

export const githubSignIn = async (): Promise<void> => {
  try {
    // Aquí se usa la instancia de autenticación de Firebase
    const result = await signInWithPopup(Auth, provider);

    // Obtiene el token de acceso de GitHub
    const credential = GithubAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;
    const refreshToken = credential?.accessToken
    // Información del usuario que ha iniciado sesión
    const user = result.user;

    // Aquí puedes manejar la información del usuario o el token según sea necesario
    
    console.log("User Info:", user);
    console.log("Access Token:", accessToken);


    if (accessToken && user && refreshToken) {
      // Llamada al endpoint para almacenar la cookie con el JWT
      await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken, refreshToken }),
      });

      // Almacenar en el estado global con Zustand
      // useUserState.getState().setUser(user);
    }
    
  } catch (error) {
    // Manejo de errores
    if (error instanceof Error) {

      console.error("Error Code:", error.name);
      console.error("Error Message:", error.message);

    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
};
