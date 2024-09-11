"use client";

import React from 'react'
import { Card} from './ui/card'
import { Cloud, Filter, Fingerprint, Globe2, Settings, Settings2 } from 'lucide-react'
import { StackIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

function Features() {
  return (
    <motion.section
            className="relative flex min-h-[80vh] w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            
        >
            <div
                className="mt-8 flex flex-col place-items-center gap-5"
            >
                <div
                    className="reveal-up mt-5 flex flex-col gap-3 text-center"
                >
                    <h2
                        className="heading"
                    >
                        Features loved by everyone
                    </h2>
                </div>
                <div
                    className="grid md:grid-cols-2 gap-x-10 gap-y-12 "
                >
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>  
            </div>
        </motion.section>
  )
}

export default Features



function FeatureCard(
    {icon, title, description}: {icon: React.ReactNode, title: string, description: string}
) {
  return (
    <Card className='flex items-start rounded-xl bg-gradient-to-tr bg-black  px-5 py-9 z-20 hover:z-100 shadow-lg shadow-primary'>
        <span className='left-0 w-[20%]'>
            {icon}
        </span>
        <span className='flex flex-col items-start'>
            <h3 className='heading !text-2xl mb-4'>{title}</h3>
            <p className='text-white/80'>{description}</p>
        </span>
    </Card>
  )
}


const features = [
    {
        icon: <Globe2   size={64} className="text-7xl text-gray-200 max-md:text-5xl" />,
        title: "Global reach",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    {
        icon: <StackIcon className="text-7xl text-gray-200 max-md:text-5xl" />,
        title: "Stacks of features",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    {
        icon: <Cloud size={64} className="text-7xl text-gray-200 max-md:text-5xl" />,
        title: "Cloud based",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    {
        icon: <Fingerprint size={64} className="text-7xl text-gray-200 max-md:text-5xl" />,
        title: "Secure",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    {
        icon: <Filter size={64} className="text-7xl text-gray-200 max-md:text-5xl" />,
        title: "3rd party integrations",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    {
        icon: <Settings size={64} className="text-7xl text-gray-200 max-md:text-5xl" />,
        title: "Global reach",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    }
]