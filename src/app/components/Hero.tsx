import React from 'react'
import Link from 'next/link';

export default function Hero() {
  return (
    <main className='w-full' id='about'>
      <section className='pt-10 xl:pt-14'>
            <div className='mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12'>
                  <div className='mx-auto text-center lg:text-left flex flex-col max-w-3xl justify-center lg:py-8 flex-1 lg:w-1/2 lg:max-w-none'>
                        <h1 className='text-white dark:text-white text-4xl/snug sm:text-6xl/tight lg:text-5xl/tight xl:text-6xl/tight font-semibold max-w-3xl'>
                              Chceme pro Vás a Vaše zahrady jen to nejlepší
                        </h1>
                        <p className='mt-10 text-gray-700 dark:text-gray-300 lg:text-lg max-w-2xl lg:max-w-none lg:text-left sm:text-center'>
                              Pomáháme realizovat sny při krášlení Vaši zahrady, začněte malými věcmi, které mohou Vaši zahradu udělat dokonalou.
                        </p>
                        <div className='mt-10 flex gap-4 justify-center lg:justify-start flex-wrap'>
                              <Link href="#" className='relative px-6 py-3 bg-white rounded-3xl'>
                                    <span className='relative text-black'>
                                          Naše nabídka
                                    </span>
                              </Link>
                        </div>
                  </div>
            </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 divide-y divide-gray-100 dark:divide-gray-900 sm:divide-y-0 sm:divide-x md:children:!border-t-0 sm:children:even:border-transparent ">
                <div className="space-y-4 text-left">
                    <h2 className="text-gray-900 dark:text-white font-semibold text-3xl">
                        1000+
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Spokojených zákazníků
                    </p>
                </div>
                <div className="space-y-4 text-left">
                    <h2 className="text-gray-900 dark:text-white font-semibold text-3xl">
                        +20 Značek
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Na Vaši zahradu
                    </p>
                </div>
            </div>
        </div>
      </section>
    </main>
  )
}
