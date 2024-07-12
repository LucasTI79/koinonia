"use client"
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
type TLink = { label: string; href: string; index?: boolean }
type THeaderProps = {
    links: TLink[]
}

export function Header({ links = [] }: THeaderProps) {
    return (
        <header className="relative hidden md:flex pt-20 justify-center items-center">
            <div className="w-full max-w-[1200px] flex justify-center items-center mx-auto">
                <nav>
                    <ul className="flex justify-center items-center gap-4">
                        {links.map((link) => (
                            <motion.li
                                className='relative inline-block no-underline'
                                key={link.href}
                            >
                                <motion.a
                                    href={link.href}
                                    className={cn("text-pretty relative inline-block")}
                                    initial={{ y: 0 }}
                                    whileHover={{ y: -1 }}
                                >
                                    {link.label}
                                    <motion.span
                                        className="absolute left-0 bottom-0 h-1 bg-black"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
