"use client"

import { Button } from "@/components/ui/button";

type TDownloadWallpaperButtonProps = {
    downloadLink: string;
}

export function DownloadWallpaperButton({ downloadLink }: TDownloadWallpaperButtonProps) {
    function handleDownloadWallpaper(link: string){
        window.open(link, '_blank')
    }

    return (
        <Button size="sm" variant="outline" onClick={() => handleDownloadWallpaper(downloadLink)}>
            Download
        </Button>
    )
}