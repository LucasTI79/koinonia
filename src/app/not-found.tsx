import Link from "next/link";
import { NotFound as NotFoundDraw } from "@/components/icons/404";

export default function NotFound(){
    return (
        <main className="w-screen h-screen flex flex-col gap-8 justify-center items-center">
            <NotFoundDraw width={576} />
            <Link href="/">Ir para o Inicio</Link>
        </main>
    )
} 