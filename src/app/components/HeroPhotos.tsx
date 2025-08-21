import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";

export default function HeroPhotos() {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      img1.current,
      { opacity: 0 },
      { rotate: -8, opacity: 1, duration: 0.6, ease: "ease-out", delay: 0.5 }
    );
    gsap.fromTo(
      img2.current,
      { y: 50, opacity: 0 },
      { y: 0, rotate: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.5 }
    );
    gsap.fromTo(
      img3.current,
      { opacity: 0 },
      { rotate: 8, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <section className="w-full flex justify-center items-center lg:mt-0 mt-25 lg:mb-0 mb-30">
      <div className="relative w-[250px] lg:w-[900px] h-[350px] lg:h-[600px] flex items-center justify-center overflow-visible">

        <div className="absolute inset-0 rounded-full bg-[#FF6A00] opacity-10 blur-[100px]" />


        <div className="relative w-[250px] lg:w-[866px] h-[350px] lg:h-[600px] flex items-center justify-center">
          

          <div className="absolute left-[-30] lg:left-0 top-[-50] lg:top-40">
            <div className="relative aspect-[268/303] w-[215px] lg:w-[278px]">
              <Image
                src="/main1.png"
                alt="main1"
                ref={img1}
                fill
                className="border-[3px] border-white rounded-[20px] object-cover shadow-2xl"
                sizes="(min-width:1024px) 278px, 80px"
                priority
              />
            </div>
          </div>


          <div className="absolute z-10">
            <div className="relative aspect-[310/383] w-[250px] lg:w-[310px]">
              <Image
                src="/main2.png"
                alt="main2"
                ref={img2}
                fill
                className="border-[3px] border-white rounded-[20px] shadow-2xl object-cover"
                sizes="(min-width:1024px) 310px, 120px"
                priority
              />
            </div>
          </div>


          <div className="absolute right-[-15] lg:right-0 bottom-[-40] lg:bottom-30">
            <div className="relative aspect-[278/333] w-[215px] lg:w-[278px]">
              <Image
                src="/main3.png"
                alt="main3"
                ref={img3}
                fill
                className="border-[3px] border-white rounded-[20px] object-cover shadow-2xl"
                sizes="(min-width:1024px) 278px, 80px"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}