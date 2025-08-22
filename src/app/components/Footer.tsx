import Link from 'next/link'

interface FooterItemProps {
  id: number;
  text: string;
  link: string;
}

interface FooterBlockItemProps {
  title: string;
  items: FooterItemProps[];
}

const FooterItem = ({ text, link }: FooterItemProps) => {
return (
    <li>
        <Link href={link} className="duration-200 hover:text-white dark:hover:text-white">
            {text}
        </Link>
    </li>
)
}

const FooterBlockItem = ({ title, items }: FooterBlockItemProps) => {
return (
    <div className="space-y-6">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
        </h1>
        <ul className="space-y-3">
            {
                items.map(item => (
                    <FooterItem key={item.id} {...item} />
                ))
            }
        </ul>
    </div>
)
}
 
const footerBlocks = [
{
    id: 1,
    title: "Lokace",
    items: [
        {
            id: 1,
            text: "269 01 Rakovník, Bezděkov 1037",
            link: "#"
        },
    ]
},
{
    id: 2,
    title: "Navigace",
    items: [
        {
            id: 1,
            text: "O nás",
            link: "#"
        },
        {
            id: 2,
            text: "Naše nabídka",
            link: "#"
        },
        {
            id: 3,
            text: "Partneři",
            link: "#"
        },
        {
            id: 4,
            text: "Kontakty",
            link: "#"
        },
    ]
},
{
    id: 3,
    title: "Kontakty",
    items: [
        {
            id: 1,
            text: "prodejna@zahradnictvi-rakovnik.cz",
            link: "#"
        },
        {
            id: 2,
            text: "604 810 665",
            link: "#"
        },
        {
            id: 3,
            text: "Facebook",
            link: "#"
        },
    ]
},
{
    id: 4,
    title: "Otevírací doba",
    items: [
        {
            id: 1,
            text: "Blog",
            link: "#"
        },
        {
            id: 2,
            text: "Privacy",
            link: "#"
        },
        {
            id: 3,
            text: "Terms",
            link: "#"
        },
        {
            id: 4,
            text: "FAQ",
            link: "#"
        },
    ]
},
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-green-900 text-gray-700 dark:text-gray-300">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="border-t border-t-white dark:border-t-white py-16 md:py-20 flex flex-col lg:flex-row gap-14 gap-y-16">
                <nav className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-10">
                    {
                        footerBlocks.map(
                            footerBlock => (
                                <FooterBlockItem key={footerBlock.id} {...footerBlock} />
                            )
                        )
                    }
                </nav>
            </div>
        </div>
        <div className="py-3 bg-green-800 dark:bg-green-800">
            <div className="max-w-3xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex justify-center text-center">
                <p> © 2025 ZAHRADNICTVÍ s.r.o. Všechna práva vyhrazena </p>
            </div>
        </div>
    </footer>
  )
}
