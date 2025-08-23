'use client'

import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { useRef } from "react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap"

export default function Process(){
    const ref = useRef(null)

    useGSAP(() => {

    gsap.registerPlugin(ScrollTrigger);

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
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-[48px] text-left sm:mb-[90px] mb-[90px] w-full" id="ablauf">
            <div className="flex flex-col gap-[18px]">
                <div className="flex gap-2.5 w-full items-center text-left">
                    <span className="border-[0.5] w-[20px] h-[0.5px] border-black"></span>
                    <p className="text-[1rem] text-black font-[400]">Über Velvera</p>
                </div>
                <h1 className="max-w-[615px] sm:text-[3.5rem]/[90%] text-[2rem]/[118%] font-semibold mb-6 sm:mb-8">
                    Der Ablauf
                </h1>
                <Image src={"/process1.jpg"} alt={"process"} width={551} height={450}/>
            </div>

            <div className="flex flex-col justify-between sm:gap-0 gap-10" ref={ref}>
                <div className="flex gap-[18px]">
                    <span className="flex bg-[#FF6A00] justify-center items-center aspect-[1/1] rounded-full w-8 h-8 text-white text-[0.875rem] mt-4">01</span>

                    <div className="flex flex-col gap-[16px] text-left">
                        <h1 className="sm:text-[2.375rem] text-[1.875rem]">Beratung</h1>
                        <p className="text-[1.25rem] font-[500] text-black/50">Unsere Experten nehmen sich Zeit, um Ihren Haartyp, Ihre Anliegen und den gewünschten Look zu verstehen.</p>
                    </div>
                </div>

                <div className="flex border-b border-t py-[30px] gap-[18px]">
                    <span className="flex bg-[#FF6A00] justify-center items-center aspect-[1/1] rounded-full w-8 h-8 text-white text-[0.875rem] mt-4">02</span>

                    <div className="flex flex-col gap-[16px] text-left">
                        <h1 className="sm:text-[2.375rem] text-[1.875rem]">Individuelle Behandlung</h1>
                        <p className="text-[1.25rem] font-[500] text-black/50">Ob Haarschnitt, Farbe oder Tiefenpflege – wir passen jeden Schritt an, um die Farbe zu verbessern.</p>
                    </div>
                </div>

                <div className="flex gap-[18px]">
                    <span className="flex bg-[#FF6A00] justify-center items-center aspect-[1/1] rounded-full w-8 h-8 text-white text-[0.875rem] mt-4">03</span>

                    <div className="flex flex-col gap-[16px] text-left">
                        <h1 className="sm:text-[2.375rem] text-[1.875rem]">Der letzte Schliff</h1>
                        <p className="text-[1.25rem] font-[500] text-black/50">Wir vervollständigen Ihren Look mit professionellem Styling und sorgen dafür, dass sich Ihr Haar frisch und makellos anfühlt.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}