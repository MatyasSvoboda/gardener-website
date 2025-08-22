import Link from 'next/link'

export default function CTA() {
  return (
   <section className="py-24">
        <div className="mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="bg-gradient-to-br from-green-200 to-green-300 dark:from-green-900 dark:bg-green-800 rounded-lg p-8 md:p-10 py-14 lg:p-14 items-center justify-center text-center md:text-left md:justify-start md:items-start gap-8">
                <div className="w-full">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-blue-950 dark:text-white font-display font-bold leading-tight">
                        Novinky najdete u nás na Facebooku!
                    </h1>
                </div>
                <div className="flex flex-col md:flex-1 space-y-8">
                    <p className="text-gray-700 dark:text-gray-300">
                        V naší Facebook skupině můžete najít fotky nových věcí a informace o změně otevírací doby.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <Link href="#" className='relative px-6 py-3 bg-white rounded-3xl'>
                              <span className='realative text-black'>
                                    Naše Facebook skupina
                              </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
