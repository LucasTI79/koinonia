import { Heart } from "@/components/icons/Heart";
import { CalendarList } from "./components/eventsList";
import { environments } from "@/config/environments";
import { Footer } from "@/components/footer";
import { Koinonia } from "@/components/icons/Koinonia";

export default function MembersPage(){
    const calendarIds = environments.calendarIds.split(",");

    return (
        <main className="flex flex-col min-h-screen bg-background">
            <section className="pt-40 flex flex-col gap-16 max-w-[1200px] justify-center items-center mx-auto p-4">
                <div className="flex justify-center items-center">
                    <Koinonia className="hidden md:block dark:fill-white fill-black" width={`6rem`} height={`6rem`} />
                    <h1 className="text-6xl font-black">KOINONIA</h1>
                </div>
            </section>
            <section className="pt-24 px-4 w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-8">
               <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-4">
                    <h2 className="text-3xl font-semibold mb-4">Área de membros</h2>
                    <p>Aqui você poderá encontrar nossa agenda e informações do grupo</p>
                    <Heart width={24} height={24} className="fill-black dark:fill-white self-center" />
               </div>
               <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-4">
                    <h2 className="text-3xl font-semibold mb-4">Versículo do dia</h2>
                    <p>Deus amou o mundo de tal maneira que deu seu filho unigenito para que todo aquele que nele cre nao pereça, mas tenha a vida eterna</p>
               </div>
            </section>
            <section className="pt-24 px-4 w-full max-w-[1200px] mx-auto flex flex-col justify-center md:justify-start gap-8">
                <h2 className="text-3xl font-semibold mb-4">Próximos eventos</h2>
                {/* {calendarIds.map((calendarId) => {
                    <CalendarList key={calendarId} calendarId={calendarId}/>
                })} */}
                <CalendarList calendarId={calendarIds[0]}/>
                <CalendarList calendarId={calendarIds[1]}/>
            </section>

            <Footer />
        </main>
    )
}