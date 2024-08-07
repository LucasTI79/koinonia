import { Heart } from "@/components/icons/Heart";
import { CalendarList } from "./components/eventsList";
import { environments } from "@/config/environments";
import { Footer } from "@/components/footer";
import { Koinonia } from "@/components/icons/Koinonia";
import { DailyVerse } from "./components/dailyVerse";
import { ClientOnly } from "@/components/clientOnly";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Fragment } from "react";
import { Cursor } from "@/components/cursor";

export const revalidate = Number(environments.revalidateTime ||  60 * 5) // 5 minutes

export default function MembersPage(){   
    const calendarIds = environments.calendarIds.split(",");

    return (
        <main className="flex flex-col min-h-screen bg-background">
            <Link 
                href="/" 
                className="bg-white dark:bg-black rounded-xl p-2 h-10 fixed top-8 left-8 flex justify-center items-center gap-2"
                >
              <ArrowLeft size={20}/>
              <p className="hidden md:block">Voltar</p>
            </Link>
            <section className="pt-40 flex flex-col gap-16 max-w-[1200px] justify-center items-center mx-auto p-4">
                <div className="flex justify-center items-center">
                    <Koinonia className="hidden md:block dark:fill-white fill-black" width={`6rem`} height={`6rem`} />
                    <h1 className="text-6xl font-black">KOINONIA</h1>
                </div>
                <Button asChild>
                    <Link href="/members/wallpapers">Acessar Galeria</Link>
                </Button>

            </section>
            <section className="pt-24 px-4 w-full max-w-[1200px] mx-auto flex flex-col gap-16 md:flex-row justify-between md:gap-8">
               <div className="w-full md:w-1/2 flex flex-col justify-center items-center lg:items-start gap-4">
                    <h2 className="text-3xl font-semibold mb-4">Área de membros</h2>
                    <p>Aqui você poderá encontrar nossa agenda e informações do grupo</p>
                    <Heart width={24} height={24} className="fill-black dark:fill-white self-center" />
               </div>
               <div className="w-full md:w-1/2 flex flex-col justify-start items-center gap-4 max-h-32">
                    <h2 className="text-3xl font-semibold mb-4">Versículo do dia</h2>
                    <ClientOnly>
                        <DailyVerse />
                    </ClientOnly>
               </div>
            </section>
            <section className="pt-40 px-4 w-full max-w-[1200px] mx-auto flex flex-col justify-center md:justify-start gap-8">
                <h2 className="text-3xl font-semibold mb-4">Próximos eventos</h2>
                <Fragment>
                    {calendarIds.map((calendarId) => {
                        return <CalendarList key={calendarId} calendarId={calendarId}/>
                    })}
                </Fragment>
            </section>

            <Footer />

            <ClientOnly>
                <Cursor />
            </ClientOnly>
        </main>
    )
}