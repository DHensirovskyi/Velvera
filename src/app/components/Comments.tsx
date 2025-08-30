'use client'

import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { useRef } from "react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap"

interface Items{
  img: string;
  name: string;
  description: string;
  label: string;
}

const comments: Items[] = [
  { img: "/comm2.png", name: "Emma Rose", description: "Ich liebe meinen neuen Look! Velvera hat mein Haar mit dem perfekten Schnitt und der perfekten Farbe komplett verwandelt und sowohl Stil als auch Gesundheit verbessert. Ich habe mich noch nie so selbstbewusst und erfrischt gefühlt!", label: "Balayage & Styling" },
  { img: "/comm7.png", name: "Sophia Lane", description: "Velvera hat mein Haar mit dem perfekten Schnitt und der perfekten Farbe verwandelt.", label: "Keratin-Behandlung" },
  { img: "/comm3.png", name: "Jane Doe", description: "Gesundes Haar wie nie zuvor! Meine beschädigten, leblosen Strähnen fühlen sich endlich weich und gepflegt an.", label: "Haarschnitt & Föhnen" },
  { img: "/comm4.png", name: "Olivia Tate", description: "Volumen und Glanz sind zurück! Früher war mein Haar platt, aber nach der Behandlung ist es voll, federnd und hat diesen Salon-Finish.", label: "Haarreparatur-Behandlung" },
  { img: "/comm5.png", name: "Isabella Wren", description: "Jedes Mal die perfekte Farbe! Die Color-Experten wissen genau, was zu mir passt. Mein Balayage wirkt so natürlich und lebendig – ich bekomme ständig Komplimente!", label: "Balayage & Gloss" },
  { img: "/comm6.png", name: "Lily Quinn", description: "Die beste Salon-Erfahrung überhaupt! Das Team hört wirklich zu, versteht meine Bedürfnisse und passt alles individuell an.", label: "Volumen-Boost-Behandlung" },
];

export default function Comments(){
  const sectionRef = useRef<HTMLDivElement|null>(null);
  const listRef = useRef<HTMLDivElement|null>(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          once: true,
        },
      }
    );
  }, []);

  useGSAP(() => {
    if (!listRef.current) return;
    const cards = gsap.utils.toArray<HTMLElement>('.comment-card');

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            once: true,
          },
        }
      );
    });
  }, []);

  return(
    <section className="flex items-center justify-center flex-col gap-[68px] text-center mb-[90px] mt-[60px] w-full m-auto" id="bewertungen">
      <div ref={sectionRef} className="flex flex-col justify-center items-center gap-[18px]">
        <div className="flex gap-2.5 w-full items-center text-center justify-center">
          <span className="border-[0.5] w-[20px] h-[0.5px] border-black"></span>
          <p className="text-[1rem] text-black font-[400]">Bewertungen</p>
        </div>
        <h1 className="max-w-[615px] sm:text-[3.125rem]/[130%] text-[2rem]/[118%] font-semibold">
          Was unsere Kunden über die Dienstleistungen von Velvera sagen
        </h1>
      </div>

      <div ref={listRef} className="w-full max-w-[1150px] columns-1 sm:columns-3 gap-[22px]">
        {comments.map((comm) => (
          <div
            key={comm.name}
            className="comment-card break-inside-avoid mb-[22px] flex flex-col gap-8 bg-[#FAFAFA] w-full px-5 py-6 rounded-[24px] will-change-[transform,opacity]"
          >
            <div className="flex justify-between items-center">
              <Image
                width={108}
                height={20}
                src={comm.img}
                alt={comm.name}
                className="rounded-full w-[52px] h-[52px] aspect-[1/1]"
              />
              <Image width={108} height={20} src={"/stars2.svg"} alt={"stars"} />
            </div>
            <p className="w-full text-black/50 text-[1.125rem] font-[500] text-left">
              {comm.description}
            </p>
            <div className="flex flex-col">
              <p className="w-full text-black/90 text-[1.125rem] font-[500] text-left">
                {comm.name}
              </p>
              <p className="w-full text-black/50 text-[1rem] font-[500] text-left">
                {comm.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
