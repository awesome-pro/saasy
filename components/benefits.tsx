import React from 'react'

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
                className="heading"
            >
                Key benefits
            </h2>
        </div>
        <div
            className="mt-6 flex max-w-[80%] flex-wrap place-content-center gap-8 max-lg:flex-col"
        >
            <div
                className="reveal-up flex h-[400px] w-[450px] flex-col gap-3 text-center max-md:w-[320px]"
            >
                <div
                    className="border-gradient h-[200px] w-full overflow-hidden max-md:h-[150px]"
                >
                    <div
                        className="flex h-full w-full place-content-center place-items-end p-2"
                    >
                        <i
                            className="bi bi-rocket-takeoff-fill text-7xl text-gray-200 max-md:text-5xl"
                        ></i>
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-2">
                    <h3
                        className="mt-8 text-2xl font-normal max-md:text-xl"
                    >
                        Minimize hours spent
                    </h3>
                    <div className="text-gray-300">
                        Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit.
                    </div>
                </div>
            </div>
            <div
                className="reveal-up flex h-[400px] w-[450px] flex-col gap-3 text-center max-md:w-[320px]"
            >
                <div
                    className="border-gradient h-[200px] w-full overflow-hidden max-md:text-[150px]"
                >
                    <div
                        className="flex h-full w-full place-content-center place-items-end p-2"
                    >
                        <i
                            className="bi bi-layout-sidebar-inset text-7xl text-gray-200 max-md:text-5xl"
                        ></i>
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-2">
                    <h3
                        className="mt-8 text-2xl font-normal max-md:text-xl"
                    >
                        Simple to use
                    </h3>
                    <div className="text-gray-300">
                        Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit.
                    </div>
                </div>
            </div>
            <div
                className="reveal-up flex h-[400px] w-[450px] flex-col gap-3 text-center max-md:w-[320px]"
            >
                <div
                    className="border-gradient h-[200px] w-full overflow-hidden max-md:h-[150px]"
                >
                    <div
                        className="flex h-full w-full place-content-center place-items-end p-2"
                    >
                        <i
                            className="bi bi-lightning-charge-fill text-7xl text-gray-200 max-md:text-5xl"
                        ></i>
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-2">
                    <h3
                        className="mt-8 text-2xl font-normal max-md:text-xl"
                    >
                        Speed up your development
                    </h3>
                    <div className="text-gray-300">
                        Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit.
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Benefits