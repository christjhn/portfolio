import React from "react";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import CJ from "../../../public/assets/CJ.png"
import { Playfair_Display, Poppins, Montserrat } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Navbar(){
    return(
        <nav className="fixed top-0 left-0 right-0 bg-[#1B1A55] z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#9290C3] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            {/* <!--
                                Icon when menu is closed.

                                Menu open: "hidden", Menu closed: "block"
                            --> */}
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/* <!--
                                Icon when menu is open.

                                Menu open: "block", Menu closed: "hidden"
                            --> */}
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex justify-center items-center hidden sm:ml-6 sm:block">
                            <div className="flex justify-center items-center">
                                <a href="/" className={`rounded-md px-3 py-2 text-sm font-medium text-[#9290C3] hover:bg-[#535C91] hover:text-white ${montserrat.className}`}>Dashboard</a>
                                <a href="/aboutme" className={`rounded-md px-3 py-2 text-sm font-medium text-[#9290C3] hover:bg-[#535C91] hover:text-white ${montserrat.className}`}>About Me</a>
                                <a href="/workexperience" className={`rounded-md px-3 py-2 text-sm font-medium text-[#9290C3] hover:bg-[#535C91] hover:text-white ${montserrat.className}`}>Work Experience</a>
                                <a href="/project" className={`rounded-md px-3 py-2 text-sm font-medium text-[#9290C3] hover:bg-[#535C91] hover:text-white ${montserrat.className}`}>Projects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="/" className={`block rounded-md px-3 py-2 text-base font-medium text-[#9290C3] hover:bg-[#535C91] hover:text-white ${montserrat.className}`}>Dashboard</a>
                    <a href="/aboutme" className={`block rounded-md px-3 py-2 text-base font-medium text-[#9290C3] hover:bg-[#535C91] hover:text-white ${montserrat.className}`}>About Me</a>
                    <a href="/workexperience" className={`block rounded-md px-3 py-2 text-base font-medium text-[#9290C3] hover:bg-[#535C91] hover:text-white ${montserrat.className}`}>Work Experience</a>
                    <a href="/project" className={`block rounded-md px-3 py-2 text-base font-medium text-[#9290C3] hover:bg-[#535C91] hover:text-white ${montserrat.className}`}>Projects</a>
                </div>
            </div>
        </nav>
    );
}
