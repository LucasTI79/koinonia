import { ModeToggle } from "@/components/theme-switcher";
import { Facebook } from "../components/icons/Facebook";
import { Instagram } from "@/components/icons/Instagram";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Koinonia } from "@/components/icons/Koinonia";
import { Smile } from "@/components/icons/Smile";
import { Cross } from "@/components/icons/Cross";
import { Heart } from "@/components/icons/Heart";
import { Arrow } from "@/components/icons/Arrow";

export default function Home() {
  return (
    <main className="w-full h-full mx-auto">
      <header className="hidden md:block pt-20 flex justify-center items-center">
        <div className="w-full max-w-[1200px] flex justify-center items-center">
          <nav>
            <ul className="flex justify-center items-center gap-4">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#aboutus">Quem Somos</a>
              </li>
              <li><a href="#purpose">Nosso Proposito</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="pt-40 flex max-w-[1200px] justify-center items-center mx-auto p-4">
        <Koinonia className="hidden md:block dark:fill-white fill-black" width={`6rem`} height={`6rem`} />
        <h1 className="text-6xl font-black flex justify-center items-center gap-4">KOINONIA</h1>
      </section>

      <section id="aboutus" className="pt-40 flex flex-col gap-8 max-w-[1200px] justify-center items-center lg:items-start mx-auto p-4">
        <h3 className="text-5xl font-black">Quem somos ?</h3>
        <article className="w-full max-w-[600px] flex flex-col justify-center items-center gap-4">
          <p className="text-pretty text-xl">Somos uma junção de pessoas de igrejas interministeriais, o foco não é seguir uma denominação e sim unir pessoas que queiram louvar a Jesus Cristo com excelência, com verdadeira adoração e que entendam o que é louvar o Senhor na sua essência.</p>
          <Cross className="dark:fill-white fill-black self-center" width={32} height={32} />
        </article>
      </section>

      <section id="purpose" className="pt-40 flex flex-col lg:flex-row gap-8 max-w-[1200px] justify-center lg:justify-between items-center lg:items-start mx-auto p-4">
        <h3 className="text-5xl font-black">Nosso Propósito</h3>
        <article className="w-full max-w-[600px] flex flex-col gap-4 items-center justify-center">
          <p className="text-pretty text-xl">Pregar o amor de Cristo e ter um crescimento enraizado na palavra do Senhor, crescendo na graça e no conhecimento</p>
          <Heart className="dark:fill-white fill-black" width={32} height={32} />
        </article>
      </section>

      <section className="pt-40 flex flex-col gap-8 max-w-[1200px] justify-center items-center mx-auto p-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center justify-start gap-16">
            <span>20/07/2024</span>
            <span>Ensaio Koinonia</span>
          </div>
          <MoveRight size={32} />
        </div>
        <Separator />
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center justify-start gap-16">
            <span>03/07/2024</span>
            <span>Ensaio Koinonia</span>
          </div>
          <MoveRight size={32} />
        </div>
        <Separator />
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center justify-start gap-16">
            <span>17/08/2024</span>
            <span>Ensaio Koinonia</span>
          </div>
          <MoveRight size={32} />
        </div>
        <Separator />
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center justify-start gap-16">
            <span>31/08/2024</span>
            <span>Ensaio Koinonia</span>
          </div>
          <MoveRight size={32} />
        </div>
      </section>

      <section id='contact' className="pt-40 flex flex-col gap-8 max-w-[1200px] justify-center items-center mx-auto p-4">
        <Smile width={76} height={76} />
        <div className="flex justify-center items-center gap-4">
          <h1 className="text-5xl font-black text-center">Entre nessa jornada</h1>
          <Arrow className="dark:fill-white fill-black hidden md:block" width={32} height={32} />
        </div>

        <article className="max-w-[500px] text-cente text-xl">
          <p>Entre em nossa viagem divina! Conecte-se conosco nas redes sociais, receba as últimas atualizações sobre nossos eventos e faça parte dessa jornada hipnotizante.</p>
        </article>
        <Button asChild>
           <a href="mailto:oi@koinoniaproject.com.br?subject=Quero conhecer mais o Koinonia" target="_blank">Quero conhecer mais</a>
        </Button>
      </section>

      <footer className="pt-40 pb-20 mx-auto flex w-full max-w-[1200px] items-center justify-center p-4">
        <div className="flex justify-between items-center flex-1">
          <p className="text-sm"> &copy; {new Date().getFullYear()} LFA Labs. Todos os direitos reservados. Graça e paz.</p>
          <div className="flex justify-center items-center gap-4">
            <a href="https://www.facebook.com/profile.php?id=61560759413266" target="_blank">
              <Facebook className="dark:fill-white fill-black" width={24} height={24} />
            </a>
            <a className="" href="https://www.instagram.com/koinoniamusicproject" target="_blank">
              <Instagram className="dark:fill-white fill-black" width={24} height={24} />
            </a>
            {/* <a className="" href="https://www.instagram.com/koinoniamusicproject" target="_blank">
                <Koinonia className="dark:fill-white fill-black" width={24} height={24} />
              </a> */}
          </div>
        </div>
      </footer>

      <div className="fixed top-8 right-8">
        <ModeToggle />
      </div>
      {/* <Popover >
        <PopoverTrigger asChild className="fixed top-8 right-8"> <Settings size={32} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex justify-center items-center gap-4">
            <p className="text-xl">Escolha um tema</p>
            <ModeToggle />
          </div>
        </PopoverContent>
      </Popover> */}
    </main>
  );
}
