'use client'

import { NavItem } from "@/components/atoms"
import Image from "next/image"
import Link from "next/link"

const NAV_ITENS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Projetos',
        href: '/projects'
    }
]

export default function Header () {
    return (
        <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
            <div className="container flex items-center justify-between">
                <Link href='/'>
                    <Image
                    width={58}
                    height={49}
                    src='/images/icons/project-title-icon.svg'
                    alt="Logo"
                    />
                </Link>

                <nav className="flex items-center gap-4 sm:gap-10">
                    {
                        NAV_ITENS?.map(item => (
                            <NavItem key={item.label} {...item} />
                        ))
                    }
                </nav>
            </div>
        </header>
    )
}