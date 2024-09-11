import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { ChevronDown, Clock10Icon, Phone, RocketIcon } from 'lucide-react'

function Benefits() {
  return (
    <section
    className="relative flex w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6"
>
    <div
        className="mt-8 flex flex-col place-items-center gap-5"
    >
        <div
            className="reveal-up mt-5 flex flex-col gap-3 text-center"
        >
            <h2
                className="heading mb-10"
            >
                Key benefits
            </h2>
        </div>
        <div
            className="grid md:grid-cols-2 gap-x-10 gap-y-12 "
        >
            {benefits.map((benefit, index) => (
                <BenenfitCard key={index} {...benefit} />
            ))}
        </div>
    </div>
</section>
  )
}

export default Benefits


function BenenfitCard(
    {icon, title, description}: {icon: React.ReactNode, title: string, description: string}
) {
  return (
    <Card className="relative bg-black/90 text-slate-100 overflow-hidden card-shining-border text-center flex flex-col items-center">
        <CardHeader>{icon}</CardHeader>
        <CardContent>
            <h3 className='heading !text-2xl'>{title}</h3>
        </CardContent>
        <CardFooter>
            <p>{description}</p>
        </CardFooter>
    </Card>

  )
}


const benefits = [
    {
        icon: <Clock10Icon size={64} className="text-7xl text-gray-200 max-md:text-5xl" />,
        title: "Minimize hours spent",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    {
        icon: <Phone size={64} className="text-7xl text-gray-200 max-md:text-5xl" />,
        title: "Simple to use",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    {
        icon: <RocketIcon size={64} className="text-7xl text-gray-200 max-md:text-5xl" />,
        title: "Speed up your development",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    {
        icon: <ChevronDown size={64} className="text-7xl text-gray-200 max-md:text-5xl rotate-180" />,
        title: "Increase user satisfaction",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    }
]