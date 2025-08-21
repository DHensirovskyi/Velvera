'use client'

import { Button } from "@mantine/core"
import gsap from "gsap";
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react";
import { useGSAP } from '@gsap/react';
import HeroPhotos from "./HeroPhotos";


export default function HeroSection(){
  const photoRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const btnRef = useRef(null);

  useGSAP(() => {
    if (!photoRef.current) return;
    gsap.fromTo(
      photoRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        delay: 0.1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      }
    );

    if (!textRef.current) return;
    gsap.fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.2,
        duration: 1,
        ease: 'power3.out',
      }
    );

    if (!descRef.current) return;
    gsap.fromTo(
      descRef.current,
      { y: 10, opacity: 0 },
      {
        delay: 0.3,
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      }
    );

    if (!btnRef.current) return;
    gsap.fromTo(
      btnRef.current,
      { opacity: 0 },
      {
        delay: 0.3,
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      }
    );
  }, []);

    return(
        <section className="flex flex-col justify-center items-center gap-7">
            <div className="flex items-center gap-4" ref={photoRef}>
                <Image priority src={'/3person.png'} width={86} height={32} alt="zufriede kunden"/>
                <div className="flex items-center">
                    <p><span className="text-[1.125rem] text-black/90 font-medium mr-[7px]">32K+</span><span className="sm:text-[0.938rem] text-[0.89rem] text-black/50 font-medium">Zufriedene Kunden</span></p>
                </div>
            </div>

            <div className="max-w-[550px] flex flex-col gap-2.5 text-center">
                <h1 className="w-full text-center font-[600] text-black/90 sm:text-[4rem]/[130%] text-[2.625rem]/[118%]" ref={textRef}>Haarschnitt und Färben in Augsburg</h1>
                <p className="text-black/50 text-[1.25rem] font-[500]" ref={descRef}>+ KI-Terminvereinbarung in 1 Minute</p>
            </div>

            <Link href={'/#kontakt'} ref={btnRef} className="cursor-pointer"><Button id='button' px={'18px'} py={'10px'}><p className="text-[1rem] font-normal">Termin vereinbaren</p></Button></Link>

            <HeroPhotos />
        </section>
    )
}

