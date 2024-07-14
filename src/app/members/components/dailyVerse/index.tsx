"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function DailyVerse(){
    return (
        <>
            <div id="dailyVersesWrapper" className="space-y-2 h-full">
                <Skeleton className="w-full h-4"/>
                <Skeleton className="w-full h-4"/>
            </div>
            <script async defer src="https://dailyverses.net/get/verse.js?language=nvi-pt"></script>
        </>
    )
}