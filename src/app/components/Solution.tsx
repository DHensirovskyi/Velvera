'use client'

import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { useRef } from "react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap"

interface Items{
    img:string,
    name:string,
    description:string,
}

const items:Items[] = [
    {
        img: '/img4.svg',
        name: 'Tiefe Hydratation',
        description: 'Unsere keratin- und feuchtigkeitsreichen Behandlungen glätten krauses Haar.'
    },
    {
        img: '/img5.svg',
        name: 'Haare reparieren',
        description: 'Wir verwenden pflegende Behandlungen und Formeln zur Reparatur der Haarstruktur.'
    },
    {
        img: '/img6.svg',
        name: 'Fülle hinzufügen',
        description: 'Von präzisen Schnitten bis hin zu volumengebenden Behandlungen und Haarverlängerungen'
    },
]

export default function Solution(){
    const ref = useRef(null)

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          once: true,
        },
      }
    );
  }, []);

    return(
        <section className="flex items-center justify-center flex-col gap-[68px] text-center mb-[90px] px-[25px] py-15 bg-[#FFFCFA] rounded-[20px]">
            <div className="flex flex-col justify-center items-center gap-[18px]">
                <div className="flex gap-2.5 w-[87px] items-center">
                    <div className="border-[0.5] w-full h-[0.5px] border-black"></div>
                    <p className="text-[1rem] text-black font-[400]">Lösung</p>
                </div>
                <h1 className="max-w-[615px] sm:text-[3.125rem]/[130%] text-[2.5rem]/[118%] font-semibold">
                    So bringen wir Ihr Haar wieder zum Strahlen
                </h1>
            </div>
            <div className="w-auto xl:w-[1150px]" ref={ref}>
                <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-0 gap-[50px]">
                {items.map(i => (
                <div key={i.name} className="flex flex-col items-center text-center gap-[34px] w-full">
                    <span className="flex items-center justify-center w-[56px] h-[56px] rounded-full bg-[#FF6A00]">
                    <Image
                        src={i.img}
                        alt={i.name}
                        width={28}
                        height={28}
                        className="w-[28px] h-[28px] object-contain"
                    />
                    </span>


                    <div className="flex flex-col items-center text-center gap-[10px]">
                        <h1 className="font-[600] sm:text-[2rem] text-[1.875rem] text-black/90">
                        {i.name}
                        </h1>
                        <p className="font-[500] text-[1.25rem] text-black/50 max-w-[260px]">
                        {i.description}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}