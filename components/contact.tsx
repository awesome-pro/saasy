import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <section
            className="flex w-full flex-col place-content-center place-items-center gap-[10%] p-[5%] px-[10%] max-md:px-2"
        >
            <div
                className="flex w-full max-w-[80%] place-content-center place-items-center justify-between gap-3 rounded-lg border-[1px] border-outlineColor bg-secondary p-6 max-md:max-w-full max-md:flex-col"
            >
                <div className="flex flex-col gap-1">
                    <h2 className="text-3xl text-gray-300 max-md:text-xl">
                        Join our newsletter
                    </h2>
                    <div className="text-gray-300">Lorem ipsum dolor sit.</div>
                </div>

                <div
                    className="flex h-[60px] place-items-center gap-2 overflow-hidden p-2"
                >
                    <input
                        type="email"
                        className="input h-full w-full !border-gray-600 p-2 outline-none"
                        placeholder="email"
                    />
                    <Link
                        className="btn !rounded-full !border-[1px] !border-solid !border-gray-300 !bg-transparent transition-colors duration-[0.3s]"
                        href=""
                    >
                        Signup
                    </Link>
                </div>
            </div>
        </section>
  )
}

export default Contact