import { Mail } from "lucide-react";
import { Facebook } from "../icons/Facebook";
import { Instagram } from "../icons/Instagram";

export function Footer(){
    return (
        <footer className="pt-20 pb-20 mx-auto flex w-full max-w-[1200px] items-center justify-center p-4">
        <div className="flex flex-col-reverse md:flex-row gap-4 justify-between items-center flex-1">
          <p className="text-sm"> &copy; {new Date().getFullYear()} LFA Labs. Todos os direitos reservados. Graça e paz.</p>
          <div className="flex justify-center items-center gap-4">
            <a href="https://www.facebook.com/profile.php?id=61560759413266" target="_blank">
              <Facebook className="dark:fill-white fill-black hover:opacity-60 transition-opacity" width={24} height={24} />
            </a>
            <a className="" href="https://www.instagram.com/koinoniamusicproject" target="_blank">
              <Instagram className="dark:fill-white fill-black hover:opacity-60 transition-opacity" width={24} height={24} />
            </a>
            <a href="mailto:koinoniamusicproject@gmail.com?subject=Quero conhecer mais o Koinonia" target="_blank">
              <Mail className="hover:opacity-60 transition-opacity" size={24} />
            </a>
          </div>
        </div>
      </footer>
    )
}