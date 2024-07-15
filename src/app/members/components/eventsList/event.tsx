"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { animate, useMotionValue, useTransform, motion, useSpring, useMotionTemplate } from "framer-motion";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import { useEffect, useRef } from "react";

type TEventProps = {
    event: {
        id: string;
        summary: string;
        description: string;
        location: string;
        startDate: string
    };
}

const ROTATION_RANGE = 16;
const HALF_ROTATION_RANGE = 16 / 2;

export function Event({ event }: TEventProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (event: MouseEvent) => {
        if (!cardRef?.current) return [0, 0];
    
        const rect = cardRef.current.getBoundingClientRect();
    
        const width = rect.width;
        const height = rect.height;
    
        const mouseX = (event.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (event.clientY - rect.top) * ROTATION_RANGE;
    
        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;
    
        x.set(rX);
        y.set(rY);
      };
    
      const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
      };

    return (
        <motion.div 
            ref={cardRef} 
            style={{ transform }} 
            className="w-full h-full flex justify-center items-center transform-style-3d"
            onMouseMove={(e) => handleMouseMove(e.nativeEvent)}
            onMouseLeave={handleMouseLeave}
            >
            <Card className="w-full h-full backdrop-blur-3xl">
                <CardHeader className="flex flex-col gap-4">
                    <CardTitle>{event.summary}</CardTitle>
                    <CardDescription className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <CalendarIcon className="w-4 h-4" />
                            <span>{event.startDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPinIcon className="w-4 h-4" />
                            <span>{event?.location ?? `-`}</span>
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
            </Card>
        </motion.div>

    )
}