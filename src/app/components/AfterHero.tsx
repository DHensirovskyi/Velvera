'use client'

import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { useRef } from "react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap"

export default function AfterHero(){
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
        <section className="flex flex-col gap-8 items-center justify-center mb-[90px]" ref={ref}>
            <Image src={'/stars.svg'} alt="stars" width={122} height={22} />
            <h1 className="max-w-[615px] sm:text-[2.063rem] text-[1.625rem] font-semibold text-center">Die Stylisten bei Velvera haben mich durch jeden Schritt meiner Haarveränderung begleitet mit hervorragender fachkundiger Betreuung</h1>

            <div className="flex gap-[15px]">
                <Image src={'/comm10.png'} alt="comm1" width={58} height={58}/>
                <div className="flex flex-col">
                    <p className="text-black/90 font-[500] text-[1.25rem]">Sarah Johnson</p>
                    <p className="text-black/50 font-[500] text-[0.875rem]">Balayage & Styling</p>
                </div>
            </div>
            
        </section>
    )
}