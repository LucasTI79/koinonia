"use client"
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

type TLink = { label: string; href: string; index?: boolean }
type THeaderProps = {
    links: TLink[]
}

export function Header({ links = [] }: THeaderProps) {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <header className="relative hidden md:flex pt-20 justify-center items-center">
            <div className="w-full max-w-[1200px] flex justify-center items-center mx-auto">
                <nav className='relative space-y-2'>
                    <ul
                        className="flex justify-center items-center gap-4"
                        onMouseLeave={() => {
                            setPosition(prev => ({
                                ...prev,
                                opacity: 0,
                            }))
                        }}
                    >
                        {links.map((link, index) => {
                            return (
                                <Link
                                    key={index}
                                    setPosition={setPosition}
                                    >
                                     <motion.a
                                        href={link.href}
                                        className={cn("text-pretty relative inline-block")}
                                    >
                                        {link.label}
                                    </motion.a>
                                </Link>
                            )
                        })}
                       
                    </ul>
                    <motion.span
                        animate={{
                            ...position
                        }}
                        className='absolute z-0 rounded-full border-b-current border-b-2'
                    />
                </nav>
            </div>
        </header >
    );
}

function Link({ children, setPosition }: { children: React.ReactNode, setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number; }>>}){
    const ref = useRef<HTMLLIElement | null>(null);

    return (
        <li
            ref={ref}
            className='relative z-10 block cursor-pointer'
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}

        >
            {children}
        </li>
    )
}
