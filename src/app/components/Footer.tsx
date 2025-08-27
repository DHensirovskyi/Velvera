'use client'

import Link from "next/link"
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";



type Links = {
    path: string,
    name: string,
}

const links: Links[] = [
  { path: '/#über_uns', name: 'Über uns' },
  { path: '/#leistungen', name: 'Leistungen' },
  { path: '/#ablauf', name: 'Ablauf' },
  { path: '/#bewertungen', name: 'Bewertungen' },
  { path: '/#kontakt', name: 'Kontakt' },
];

const socials = [
    {
        path: 'https://www.instagram.com/',
        name: 'Instagram',
        id: 1
    },
    {
        path: 'https://dribbble.com/',
        name: 'Dribbble',
        id: 2
    },
    {
        path: 'https://x.com',
        name: 'Twitter',
        id: 3
    },
    {
        path: 'https://www.youtube.com/',
        name: 'YouTube',
        id: 4
    },
]

const info = [
    {
        info: 'velvera@gmail.com',
        icon: <IoMdMail className="text-white text-[0.875rem]"/>,
        id: 1
    },
    {
        info: '+1 234 567 890',
        icon: <FaPhoneAlt className="text-white text-[0.875rem]"/>,
        id: 2
    },
    {
        info: 'Augsburg, DE',
        icon: <MdLocationPin className="text-white text-[0.875rem]"/>,
        id: 3
    },
]

export default function Footer(){
    return(
        <footer className=" text-black h-auto bg-black/0  sm:py-[68px] py-[48px] lg:px-0 px-5">
            <section className="max-w-[1150px] mb-20 sm:mb-0 h-full m-auto flex-col grid md:gap-[0%] gap-[10%] grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-7 max-w-[250px]">
                    <h2 className="text-black/90 text-[2rem]/5 font-semibold">Velvéra</h2>
                    <p className="text-[1.25rem] text-black/70 font-[500]">Eine moderne Website für Premium-Friseursalons</p>
                    <p className="text-[1rem] text-black/50 font-medium">Built by Dmytro Hensirovskyi</p>
                </div>
                <div className="grid xl:gap-0 gap-[10%] grid-cols-2 md:grid-cols-3">
                    <div>
                        <p className="top mb-6 text-[1.25rem] font-[500]">Menü</p>
                        <div className="bottom flex flex-col gap-4 text-black text-[1rem] font-normal">
                        {links.map(item => (
                            <Link href={item.path} key={item.name} className="hover:text-black/70" style={{fontFamily:'font-family: "Inter", sans-serif;'}}>{item.name}</Link>
                        ))}
                        </div>
                    </div>
                    <div>
                        <p className="top mb-6 text-[1.25rem] font-[500]">Socials</p>
                        <div className="bottom flex flex-col gap-4 text-black text-[1rem] font-normal">
                        {socials.map(item => (
                            <Link href={item.path} key={item.id} className="hover:text-black/70">{item.name}</Link>
                        ))}
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <p className="top mb-6 text-[1.25rem] font-[500]">Info</p>
                        <div className="bottom flex flex-col gap-4 text-black text-[1rem] font-normal w-full col-span-2">
                        {info.map((item) => (
                            <Link href={'/'} key={item.id} className="flex items-center gap-2">
                                <span className="w-7 h-7 rounded-full bg-[#FF6A00] flex items-center justify-center aspect-[1/1]">
                                    {item.icon}
                                </span>
                                <p className="text-[1rem] font-medium text-black break-all">{item.info}</p>
                            </Link>
                        ))}
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}