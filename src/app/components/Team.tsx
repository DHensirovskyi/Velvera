'use client'

import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { useRef } from "react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap"
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";


interface Items{
    img:string,
    name:string,
    description:string,
}

const items:Items[] = [
    { img: '/team1.jpg', name: 'Emma Rose', description: 'Chefstylist' },
    { img: '/team2.jpg', name: 'Sophia Lane', description: 'Farbspezialist' },
    { img: '/team3.jpg', name: 'Olivia Tate', description: 'Blowout- und Styling-Künstler' },
    { img: '/team4.jpg', name: 'Jane Doe', description: 'Haarpflege-Experte' },
]

export default function Team(){
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.team-card');

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
              once: true,
            },
          }
        );
      });
    }, []);

    return(
        <section className="flex items-center justify-center flex-col gap-[68px] text-center mb-[90px]">
            <div className="flex flex-col justify-center items-center gap-[18px]">
                <div className="flex gap-2.5 w-full items-center text-center justify-center">
                    <span className="border-[0.5] w-[20px] h-[0.5px] border-black"></span>
                    <p className="text-[1rem] text-black font-[400]">Team</p>
                </div>
                <h1 className="max-w-[615px] sm:text-[3.125rem]/[130%] text-[2rem]/[118%] font-semibold">
                    Lernen Sie die Experten kennen, die hinter Ihrem perfekten Haar stehen.
                </h1>
            </div>

            <div className="grid sm:grid-cols-4 grid-cols-1 gap-[22px]">
                {items.map(i => (
                <div className="team-card flex flex-col gap-[21px]" key={i.name}>
                    <div className="relative overflow-hidden">
                        <Image src={i.img} alt={i.name} width={271} height={271} className="object-cover"/>
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        <div className="flex justify-between">
                            <h1 className="text-[1.5rem] text-black/90 font-[500] text-left">
                                {i.name}
                            </h1>
                            <Link href={'https://www.instagram.com/'} className="flex items-center">
                                <span className=" px-[5px] py-[5px] flex justify-center items-center">
                                    <FaInstagram color="black" fontSize={20}/>
                                </span>
                            </Link>
                        </div>
                        <p className="text-black/50 text-[1rem] text-left font-[500]">{i.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}
