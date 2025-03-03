import Image from "next/image"
import SectionTitle from "../ui/title"

const projects = [
    {
        id: '1',
        title: 'Title 1',
        description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".',
        img: '/'
    },
    {
        id: '2',
        title: 'Title 2',
        description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".',
        img: '/'
    },
    {
        id: '3',
        title: 'Title 3',
        description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".',
        img: '/'
    },
]

export default function Projects() {
    return (
        <section id="projects" className='flex flex-col justify-center items-center px-4 py-10 sm:px-8 md:px-20 lg:px-40'>

            <Image 
                src='/icons/scroll.svg'
                alt="ícone de mouse"
                width={32}
                height={140}
            />

            <SectionTitle>Projetos</SectionTitle>
            
            <div className="flex flex-col justify-center items-center w-full">
                {projects.map((item) => (
                    <div key={item.id} className="flex flex-col md:flex-row justify-between items-center border-b border-b-neonGreen-400 w-full mb-4 text-fontColor-50 gap-10">
                        <h1 className="font-bold font-sans text-3xl sm:text-4xl px-4 py-2 sm:px-6 sm:py-4 w-full">{item.title}</h1>
                        
                        <p className="w-full px-4 py-2 font-mono text-sm sm:text-base">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}