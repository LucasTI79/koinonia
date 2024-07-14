import { calendar, auth } from "@/lib/googleCalendar";

export async function listEvents(calendarId: string){
    return calendar.events.list({
        calendarId,
        maxResults: 10,
        auth,
    })
}