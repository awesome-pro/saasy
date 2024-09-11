import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

function Contact() {
  return (
    <section
            className='relative flex w-full items-start justify-between bg-primary/10 text-white overflow-hidden p-10 rounded-lg '
        >
         <div>
            <h3 className='text-3xl font-semibold'>
                Join Our Newsletter
            </h3>
            <h6 className=''>
                Get the latest news and updates on our products and services
            </h6>
        </div> 

        <div className='flex flex-row gap-0 items-center justify-center'>
            <Input
             className='w-full p-2 rounded-lg bg-primary/50 text-white border-none focus:ring-2 focus:ring-primary focus:outline-none rounded-r-none'
            />
            <Button className=' rounded-l-none'>Subscribe</Button>

        </div>
        </section>
  )
}

export default Contact