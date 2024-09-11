import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer
            className="mt-auto flex w-full place-content-around gap-3 p-[5%] px-[10%] text-white max-md:flex-col"
        >
            <div
                className="flex h-full w-[250px] flex-col place-items-center gap-6 max-md:w-full"
            >
                <Image
                    src="/images/logo.jpg"
                    alt="logo"
                    className="max-w-[120px]"
                    width={120}
                    height={120}
                />
                <div>
                    2 Lord Edward St,
                    <br />
                    D02 P634,
                    <br />
                    United States
                </div>
                <div className="mt-3 text-lg font-semibold">Follow us</div>
                <div className="flex gap-4 text-2xl">
                    <Link href="" aria-label="Facebook">
                        <i className="bi bi-facebook"></i>
                    </Link>
                    <Link
                        href="https://twitter.com/@pauls_freeman"
                        aria-label="Twitter"
                    >
                        <i className="bi bi-twitter"></i>
                    </Link>
                    <Link
                        href="https://instagram.com/"
                        className="h-[40px] w-[40px]"
                        aria-label="Instagram"
                    >
                        <i className="bi bi-instagram"></i>
                    </Link>
                </div>
            </div>

            <div className="flex h-full w-[250px] flex-col gap-4">
                <h2 className="text-3xl max-md:text-xl">Company</h2>
                <div className="flex flex-col gap-3 max-md:text-sm">
                    <Link href="" className="footer-link">Use cases</Link>
                    <Link href="" className="footer-link">Integrations</Link>
                    <Link href="" className="footer-link">Change logs</Link>
                    <Link href="" className="footer-link">Blogs</Link>
                    <Link href="" className="footer-link">Contact</Link>
                </div>
            </div>

            <div className="flex h-full w-[250px] flex-col gap-4">
                <h2 className="text-3xl max-md:text-xl">Resources</h2>
                <div className="flex flex-col gap-3 max-md:text-sm">
                    <Link href="" className="footer-link">About us</Link>
                    <Link href="" className="footer-link">FAQ</Link>
                    <Link href="" className="footer-link">Contact Us</Link>
                    <Link href="" className="footer-link">Blogs</Link>
                    <Link href="" className="footer-link">Privacy policy</Link>
                </div>
            </div>
        </footer>
  )
}

export default Footer