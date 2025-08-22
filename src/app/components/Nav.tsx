"use client"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

const navItems = [
{
    id: 1,
    text: "O nás",
    link: "#about"
},
{
    id: 2,
    text: "Naše nabídka",
    link: "#offer"
},
{
    id: 3,
    text: "Partneři",
    link: "#collaboration"
},
{
    id: 4,
    text: "Kontakty",
    link: "#contact"
}
]

const Nav = () => {
    const [openNavbar, setOpenNavbar] = useState(false)
    const toggleNavbar = () => {
        setOpenNavbar(openNavbar => !openNavbar)
    }

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const targetId = href.replace('#', '')
        const element = document.getElementById(targetId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setOpenNavbar(false) // Close mobile menu after clicking
    }

  return (
    <header className="left-0 top-0 w-full flex items-center h-24 z-40">
        <nav className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
            <div className="flex items-center min-w-max relative">
                <Link href="#" className="font-semibold flex items-center gap-x-2">
                    <Image src="/Logo Zahradnictví.png" width={50} height={50} alt="Zahradnictví Rakovník" />
                </Link>
            </div>
            <div className={`
                fixed inset-x-0 h-[100dvh] lg:h-max top-0  lg:translate-y-0 lg:opacity-100 left-0 bg-white dark:bg-gray-950 lg:!bg-transparent py-32 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 ease-linear
                ${openNavbar ? "" : " -translate-y-10 opacity-0 invisible lg:visible"}
            `}>
                <ul className="flex flex-col lg:flex-row gap-6 lg:items-end text-gray-700 dark:text-gray-300 lg:w-full lg:justify-end">
                    {
                        navItems.map(navItem => (
                            <li key={navItem.id}>
                                <a href={navItem.link} onClick={(e) => handleClick(e, navItem.link)} className="relative py-2.5 duration-300 ease-linear hover:text-white cursor-pointer">{navItem.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex items-center lg:hidden">
                <button onClick={() => { toggleNavbar() }} className="outline-none border-l border-l-purple-100 dark:border-l-gray-800 pl-3 relative py-3">
                    <span className="sr-only">Toggle navbar</span>
                    <span aria-hidden="true" className={`
                            flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
                            ${openNavbar ? "rotate-45 translate-y-[0.33rem]" : ""}
                        `} />
                    <span aria-hidden="true" className={`
                            flex mt-2 h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
                            ${openNavbar ? "-rotate-45 -translate-y-[0.33rem]" : ""}
                        `} />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Nav
