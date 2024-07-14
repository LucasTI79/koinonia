import { calendar, auth } from "@/lib/googleCalendar";

export async function listEvents(calendarId: string){
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return calendar.events.list({
        calendarId,
        maxResults: 10,
        auth,
        timeMin: today.toISOString(),
    })
}