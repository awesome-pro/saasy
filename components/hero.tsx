import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

function Hero() {
  return (
    <section
    className="hero-section relative flex min-h-[100vh] w-full max-w-[100vw] flex-col overflow-hidden max-md:mt-[50px]"
    id="hero-section"
>
    <div
        className="flex h-full min-h-[100vh] w-full flex-col place-content-center gap-6 p-[5%] max-xl:place-items-center max-lg:p-4"
    >
        <div
            className="flex flex-col place-content-center items-center"
        >
            <div
                className="reveal-up gradient-text text-center text-6xl font-semibold uppercase leading-[80px] max-lg:text-4xl max-md:leading-snug mb-12"
            >
                <span className="heading !text-6xl"> Ship Faster </span>
                <br />
                <span className="heading !text-6xl"> with SaaS templates </span>
            </div>

            <div
                className="reveal-up mt-10 flex items-center gap-10 lg:mb-12"
            >
                <Link href="/sign-in">
                    <Button className="text-white">Get Started</Button>
                </Link>
                <Link href="/learn-more">
                    <Button variant="ghost" className="text-white">
                        Learn More
                    </Button>
                </Link>
            </div>
        </div>

        <div
            className="reveal-up relative mt-8 flex w-full place-content-center place-items-center"
            id="dashboard-container"
        >
            <div
                className="relative max-w-[80%] overflow-hidden rounded-xl bg-transparent max-md:max-w-full"
                id="dashboard"
            >
                <Image
                    src="/images/home/dashboard.png"
                    alt="dashboard"
                    className="object-cover opacity-90 "
                    width={1500}
                    height={800}
                />
            </div>

            <div
                className="hero-img-bg-grad absolute left-[20%] top-5 h-[200px] w-[200px]"
            ></div>
        </div>
    </div>
</section>
  )
}

export default Hero