'use client'

import { useGSAP } from "@gsap/react";
import { Button } from "@mantine/core";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from "next/link";


export default function Gallery() {
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
    <section className="w-full px-4 mb-[90px]">
      <div className="flex flex-col items-center gap-[24px] text-center mb-[68px]">
        <div className="flex gap-2.5 items-center">
          <span className="border-[0.5] w-[20px] h-[0.5px] border-black" />
          <p className="text-[1rem] text-black font-[500]">Galerie</p>
        </div>
        <h1 className="max-w-[615px] sm:text-[3.125rem]/[130%] text-[2rem]/[118%] font-semibold">
          Entdecken Sie unsere Verwandlungen und Haar-Makeovers
        </h1>
        <Link href={"https://www.instagram.com/"}><Button id="button2">Mehr auf Instagram</Button></Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] sm:gap-[22px] max-w-[1150px] mx-auto" ref={ref}>
        <div className="relative overflow-hidden rounded-[16px] aspect-[1/1] sm:aspect-[1/1]">
          <Image
            src="/gallery1.jpg"
            alt="Before & After – Color & Cut"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>

        <div className="grid grid-cols-2 gap-[14px] sm:gap-[22px]">
          <div className="relative overflow-hidden rounded-[16px] aspect-square">
            <Image
              src="/gallery2.jpg"
              alt="Balayage"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 25vw"
            />
          </div>
          <div className="relative overflow-hidden rounded-[16px] aspect-square">
            <Image
              src="/gallery3.jpg"
              alt="Keratin Treatment"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 25vw"
            />
          </div>
          <div className="relative overflow-hidden rounded-[16px] aspect-square">
            <Image
              src="/gallery4.jpg"
              alt="Hair Repair"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 25vw"
            />
          </div>
          <div className="relative overflow-hidden rounded-[16px] aspect-square">
            <Image
              src="/gallery5.jpg"
              alt="Gloss & Shine"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
