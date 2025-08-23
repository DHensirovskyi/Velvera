'use client'

import { useGSAP } from "@gsap/react";
import { Button } from "@mantine/core";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AppointmentForm from './Form/Form'; 
import Link from "next/link";

export default function ContactForm() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null)

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
    }, []);

    return (
        <section ref={ref} className="w-full mb-[90px] max-w-[1150px] mx-auto rounded-[16px] px-[34px] py-[34px] gap-8 grid lg:grid-cols-2 grid-cols-1 bg-[#FFF9F5]" id="kontakt">
            <div className="flex flex-col justify-between">
                <div className="mb-8">
                    <h1 className="sm:text-[3.5rem]/[110%] text-[2.5rem]/[110%] tracking-[-2.24px] text-black/90 mb-6">
                        Vereinbaren Sie Ihren Termin mit Velvera
                    </h1>
                    <Link href={"/#ablauf"}>
                        <Button id="button" className="tracking-[0px] mb-8">
                            Wie es funktioniert
                        </Button>
                    </Link>
                </div>
                
                <div className="flex flex-col gap-[22px] max-w-[400px]">
                    <Image src={"/stars.svg"} alt={"stars"} width={128} height={24} />
                    <div>
                        <p className="text-black/70 text-[1.25rem] font-[500]">
                            Das Team bei Velvera versteht wirklich etwas von Haaren! Sie haben mir Selbstvertrauen gegeben und mich schön gemacht.
                        </p>
                    </div>
                    <div className="flex gap-[13px]">
                        <Image 
                            src={"/comm1.svg"} 
                            alt={"comm"} 
                            width={58} 
                            height={58} 
                            className="w-[58px] h-[58px] aspect-[1/1] rounded-full"
                        />
                        <div className="flex flex-col">
                            <p className="text-[1.25rem] text-black/90 font-[500]">
                                Emma Rose
                            </p>
                            <p className="text-[0.875rem] text-black/50 font-[500]">
                                Hair styling and color
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col items-center rounded-[32px] bg-[#fff] p-6 shadow-sm">
                <AppointmentForm />
            </div>
        </section>
    )
}