"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function DailyVerse(){
    return (
        <>
               
            <div id="dailyVersesWrapper" className="w-full space-y-4">
                <Skeleton className="w-full h-4 bg-muted" />
                <Skeleton className="w-full h-4 bg-muted" />
                <Skeleton className="w-full h-4 bg-muted" />
                <Skeleton className="w-full h-4 bg-muted" />
            </div>
            <script async defer src="https://dailyverses.net/get/verse.js?language=nvi-pt"></script>
        </>
    )
}