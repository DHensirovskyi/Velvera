'use client'

import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { useRef } from "react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap"
import { Button } from "@mantine/core";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

export default function About(){
    const ref = useRef(null)
    const ref2 = useRef(null)

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
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

    gsap.fromTo(
      ref2.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref2.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          once: true,
        },
      }
    );
  }, []);


    return(
        <section className="flex items-center justify-center flex-col gap-[68px] text-center sm:mb-[90px] mb-[90px] w-full" id="über_uns">
            <div className="flex flex-col justify-center items-center gap-[18px]">
                <div className="flex gap-2.5 w-full items-center text-center justify-center">
                    <span className="border-[0.5] w-[20px] h-[0.5px] border-black"></span>
                    <p className="text-[1rem] text-black font-[400]">Über Velvera</p>
                </div>
                <h1 className="max-w-[615px] sm:text-[3.125rem]/[130%] text-[2rem]/[118%] font-semibold">
                    Friseursalon, in dem Stil und Pflege zusammenkommen
                </h1>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[28px] w-full" ref={ref}>

                <div className="relative overflow-hidden max-w-[549px] max-h-[470px] ">
                    <Image src={"/about1.jpg"} alt={"about1"} width={549} height={470} className="object-cover"/>
                </div>

                <div className="flex flex-col gap-5 xl:my-[27px] my-[0px] w-full">
                    <div className="flex gap-2.5 items-center text-left">
                        <span className="border-[0.5] w-[20px] h-[0.5px] border-black" />
                        <p className="text-[1rem] text-black font-[500]">Einführung</p>
                    </div>
                    <h1 className="sm:text-[2.75rem] text-[2.5rem] text-black/90 font-[400] text-left tracking-[-1.76px]">
                        Willkommen bei Velvera, Ihrem Ansprechpartner für Haarpflege
                    </h1>
                    <p className="text-black/50 text-[1.25rem] font-[500] text-left">
                        Wir kombinieren professionelle Techniken mit hochwertigen Produkten, um 
                        Ihrem Haar die Pflege zu geben, die es verdient. Vom Styling bis hin zu 
                        Behandlungen sorgen wir dafür, dass Sie sich nach jedem Besuch 
                        selbstbewusst und gepflegt fühlen.
                    </p>
                    <div className="w-0">
                        <Link href={'/#kontakt'}><Button id="button">Professionelle Betreuung</Button></Link>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-[50px] gap-[0px] w-full" ref={ref2}>
                <div className="flex flex-col gap-5 xl:my-[52px] my-[0px] xl:mb-0 mb-[52px] w-full">
                    <div className="flex gap-2.5 items-center text-left">
                        <span className="border-[0.5] w-[20px] h-[0.5px] border-black" />
                        <p className="text-[1rem] text-black font-[500]">Warum uns wählen?</p>
                    </div>
                    <h1 className="sm:text-[2.75rem] text-[2.5rem] text-black/90 font-[400] text-left tracking-[-1.76px]">
                        Warum Velvera die richtige Wahl für Ihr Haar ist
                    </h1>
                    <div className="flex flex-col gap-4 text-left">
                        <div className="flex gap-3 items-center">
                            <span className="aspect-[1/1] px-1 py-1 rounded-full bg-[#FF6A00]"><FaCheck color="white" fontSize={10}/></span>
                            <div className="grid grid-cols-1 xl:grid-cols-[auto,1fr] justify-items-start gap-x-4">
                            <p className="font-[500] text-[1.25rem] text-black/90 w-fit whitespace-nowrap">
                                Kompetenz
                            </p>
                            <p className="font-[500] text-[1.125rem] text-black/50 justify-self-start text-left">
                                Präzises Styling durch erfahrene Profis
                            </p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="aspect-[1/1] px-1 py-1 rounded-full bg-[#FF6A00]"><FaCheck color="white" fontSize={10}/></span>
                            <div className="grid grid-cols-1 xl:grid-cols-[auto,1fr] justify-items-start gap-x-4">
                            <p className="font-[500] text-[1.25rem] text-black/90 w-fit whitespace-nowrap">
                                Qualität
                            </p>
                            <p className="font-[500] text-[1.125rem] text-black/50 justify-self-start text-left">
                                Hochwertige Produkte für langanhaltende Ergebnisse
                            </p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="aspect-[1/1] px-1 py-1 rounded-full bg-[#FF6A00]"><FaCheck color="white" fontSize={10}/></span>
                            <div className="grid grid-cols-1 xl:grid-cols-[auto,1fr] justify-items-start gap-x-4">
                            <p className="font-[500] text-[1.25rem] text-black/90 w-fit whitespace-nowrap">
                                Personalisierung
                            </p>
                            <p className="font-[500] text-[1.125rem] text-black/50 justify-self-start text-left">
                                Maßgeschneiderte Pflege für Ihr einzigartiges Haar
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative overflow-hidden max-w-[549px] max-h-[470px] ">
                    <Image src={"/about2.jpg"} alt={"about1"} width={549} height={470} className="object-cover"/>
                </div>
            </div>
        </section>
    )
}