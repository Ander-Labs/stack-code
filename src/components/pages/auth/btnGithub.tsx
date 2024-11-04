import { Button } from '@/components/ui/button';
import {githubSignIn} from './hook/githubSignIn'
import { GitHubLogoIcon } from '@radix-ui/react-icons';


export default function BtnGithub() {

    const handleGitHubLogin = async () => {
        try {
          await githubSignIn();
        } catch (error) {
          console.error('Error al iniciar sesión con GitHub:', error);
        }
      };

    return (
        <>
           
            <Button onClick={handleGitHubLogin} variant={'outline'}>
                <GitHubLogoIcon/> <span className='px-2'>Iniciar sesión con GitHub</span>
           </Button>
            
        </>
    );
}