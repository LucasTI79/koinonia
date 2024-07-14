import { listWallpapers } from "@/http/wallpapers"
import { DownloadWallpaperButton } from "./components/downloadWallpaperButton"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

type TWallpapersListProps = {
    folderId: string
}

export async function WallpapersList({ folderId }: TWallpapersListProps) {
    const { data } = await listWallpapers(folderId)

    if (!data?.files?.length) return (
        <div className="group relative overflow-hidden rounded-lg">
            Não há papéis de parede disponíveis
        </div>
    )

    const allowToDownload = data.files.filter(wallpaper => !!wallpaper.webContentLink)

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
                active: true,
            }}
            className="w-full"
        >
            <CarouselContent className="w-full">
                {allowToDownload.map((wallpaper) => {
                    console.log(wallpaper)
                    const wallpaperLink = wallpaper?.webContentLink?.split(`&`)?.[0] ?? ``

                    return (
                      <CarouselItem key={wallpaper.id} className="pl-1 ml-1 rounded-md md:basis-1/2 xl:basis-1/3 border-2 border-black/10 dark:border-white/10">
                          <div key={wallpaper.id} className="group relative overflow-hidden rounded-lg h-64"> {/* Defina a altura do contêiner */}
                            {wallpaper.hasThumbnail && wallpaperLink ? (
                                <Image
                                    src={wallpaperLink}
                                    alt={wallpaper?.name ?? `Wallpaper`}
                                    layout="fill"
                                    objectFit="contain"
                                    className="transition-opacity duration-300 group-hover:opacity-80"
                                />
                            ) : (
                                <div className="h-full w-full aspect-video flex items-center justify-center bg-background/50 text-muted-foreground">
                                    <span className="text-2xl">Sem pré-visualização</span>
                                </div>
                            )}

                            <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center bg-background/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="font-bold text-base">{wallpaper.name}</p>
                                <DownloadWallpaperButton downloadLink={wallpaper.webContentLink ?? ``} />
                            </div>
                        </div>
                      </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex"/>
        </Carousel>
    )
}
