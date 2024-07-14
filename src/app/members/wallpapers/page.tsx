import Link from "next/link";
import { WallpapersList } from "./components/wallpapersList";
import { environments } from "@/config/environments";
import { ArrowLeft } from "lucide-react";

export default async function Wallpapers() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <Link
                href="/members"
                className="bg-white dark:bg-black rounded-xl h-10 fixed px-2 top-8 left-8 flex justify-center items-center gap-2"
            >
                <ArrowLeft size={20} />
                <p className="hidden md:block">Voltar</p>
            </Link>
            <div className="mt-20 md:mt-8 container grid gap-8 px-8">
                <div className="grid gap-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Galeria de papéis de parede</h2>
                    <p className="text-muted-foreground">Explore nossa coleção de papéis de parede para o seu dispositivo.</p>
                </div>
                <div className="mt-16 flex flex-wrap justify-center items-center">
                    <WallpapersList folderId={environments.wallpapersFolderId} />
                </div>
            </div>
        </section>
    )
}