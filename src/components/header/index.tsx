"use client"
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Hamburguer } from './hamburguer';

type TLink = { label: string; href: string; native?: boolean }
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
        <header className="relative pt-20 justify-center items-center">
            {/* <Hamburguer /> */}
            <div className="hidden md:flex w-full max-w-[1200px] justify-center items-center mx-auto">
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
                                <Li
                                    key={index}
                                    setPosition={setPosition}
                                >
                                    {link.native ? (
                                        <a
                                            href={link.href}
                                            className={cn("text-pretty relative inline-block")}
                                        >
                                            {link.label}
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={cn("text-pretty relative inline-block")}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </Li>
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

function Li({ children, setPosition }: { children: React.ReactNode, setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number; }>> }) {
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
