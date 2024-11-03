import {
  signInWithPopup,
  GithubAuthProvider
} from "firebase/auth";
import { Auth } from "@/config/firebase/firebaseConfig"; // Asegúrate de que esto esté correcto

const provider = new GithubAuthProvider();

export const githubSignIn = async (): Promise<void> => {
  try {
    // Aquí se usa la instancia de autenticación de Firebase
    const result = await signInWithPopup(Auth, provider);

    // Obtiene el token de acceso de GitHub
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;

    // Información del usuario que ha iniciado sesión
    const user = result.user;

    // Aquí puedes manejar la información del usuario o el token según sea necesario
    console.log("User Info:", user);
    console.log("Access Token:", token);
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
