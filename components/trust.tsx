import Image from 'next/image'
import React from 'react'

function Trust() {
  return (
    <section
            className="relative flex w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-1"
        >
            <h2 className="heading mb-3">
                Trusted by brands you know
            </h2>

            <div className="reveal-up carousel-container">
                <div
                    className="carousel lg:w-place-content-center mt-6 flex w-full gap-5 max-md:gap-2"
                >
                
                    <div className="carousel-Image h-[30px] w-[150px]">
                        <Image
                            src="/images/brand-logos/google.svg"
                            alt="Google"
                            className="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
                            width={150}
                            height={30}
                        />
                    </div>
                    <div className="carousel-Image h-[30px] w-[150px]">
                        <Image
                            src="/images/brand-logos/microsoft.svg"
                            alt="Microsoft"
                            className="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
                            width={150}
                            height={30}
                        />
                    </div>
                    <div className="carousel-Image h-[30px] w-[150px]">
                        <Image
                            src="/images/brand-logos/adobe.svg"
                            alt="Adobe"
                            className="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
                            width={150}
                            height={30}
                        />
                    </div>
                    <div className="carousel-Image h-[30px] w-[150px]">
                        <Image
                            src="/images/brand-logos/airbnb.svg"
                            alt="Adobe"
                            className="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
                            width={150}
                            height={30}
                        />
                    </div>
                    <div className="carousel-Image h-[30px] w-[150px]">
                        <Image
                            src="/images/brand-logos/stripe.svg"
                            alt="Adobe"
                            className="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
                            width={150}
                            height={30}
                        />
                    </div>
                    <div className="carousel-Image h-[30px] w-[150px]">
                        <Image
                            src="/images/brand-logos/reddit.svg"
                            alt="Adobe"
                            className="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
                            width={150}
                            height={30}
                        />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Trust