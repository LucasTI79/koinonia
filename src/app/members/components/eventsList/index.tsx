import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { listEvents } from "@/http/events";
import { CalendarIcon, MapPinIcon } from "lucide-react";

type TCalendarListProps = {
    calendarId: string;
}

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
                    const startDateFormated = event?.start?.dateTime ? new Date(event.start.dateTime).toLocaleString() : `-`;
                    return (
                        <Card className="w-full" key={event.id}>
                            <CardHeader>
                                <CardTitle>{event.summary}</CardTitle>
                                <CardDescription>
                                    <div className="flex items-center gap-2">
                                        <CalendarIcon className="w-4 h-4" />
                                        <span>{startDateFormated}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPinIcon className="w-4 h-4" />
                                        <span>{event?.location ?? `-`}</span>
                                    </div>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{event.description}</p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
} 