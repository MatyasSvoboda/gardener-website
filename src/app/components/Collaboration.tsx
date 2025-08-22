import Image from "next/image"
 
interface LogoItemProps {
  logo: string;
  name: string;
}

const LogoItem = ({ logo, name }: LogoItemProps) => {
return (
    <div className="p-4 sm:p-5 group">
        <Image src={logo} width={100} height={60} alt={name} className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105" />
    </div>
)
}
const logos = [
{
    id: 1,
    logo:"/logos/ardon.png",
    name:"Ardon"
},
{
    id: 2,
    logo:"/logos/argo.png",
    name:"Argo"
},
{
    id: 3,
    logo:"/logos/fiskars.png",
    name:"Fiskars"
},
{
    id: 4,
    logo:"/logos/MoravoSeed.png",
    name:"MoravoSeed"
},
{
    id: 5,
    logo:"/logos/plastia.png",
    name:"Plastica"
},
]
const LogoCloudSection = () => {
return (
    <section className="py-20" id="collaboration">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
            <div className="text-center space-y-6 max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">Firmy, se kterými spolupracujeme</h1>
                <p className="text-gray-700 dark:text-gray-300">
                    U nás si vybere každý!
                </p>
            </div>
            <div className="flex justify-center flex-wrap gap-4">
                {
                    logos.map(
                        logo=>(
                            <LogoItem key={logo.id} {...logo}/>
                        )
                    )
                }
            </div>
        </div>
    </section>
)
}
export default LogoCloudSection