import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { environments } from "@/config/environments";
import { listEvents } from "@/http/events";
import { CalendarIcon } from "lucide-react";
import { Event } from "./event";

type TCalendarListProps = {
    calendarId: string;
}

export const revalidate = Number(environments.revalidateTime || 60 * 5) // 5 minutes

export async function CalendarList({ calendarId }: TCalendarListProps) {
    const { data } = await listEvents(calendarId);

    if (!data.items?.length) {
        return (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Sem eventos futuros</CardTitle>
                        <CardDescription>
                            <div className="flex items-center gap-2">
                                <CalendarIcon className="w-4 h-4" />
                                <span>Sem eventos agendados</span>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Fique atento(a) que logo teremos novidades 🙃 </p>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">{data.summary}</h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {data.items.map((event) => {
                    return (
                        <Event
                            key={event.id}
                            event={{
                                id: event?.id ?? '-',
                                summary: event?.summary ?? '-',
                                description: event?.description ?? '',
                                location: event?.location ?? '-',
                                startDate: event?.start?.dateTime ?? event?.start?.date ?? undefined
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
} 