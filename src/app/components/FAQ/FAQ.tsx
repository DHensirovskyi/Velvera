'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { data } from './data'
import { FiPlus, FiX } from 'react-icons/fi'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function FAQ() {
  const [opened, setOpened] = useState<string[]>([])
  const toggle = (v: string) =>
    setOpened(prev => (prev.includes(v) ? prev.filter(i => i !== v) : [...prev, v]))

  const ref = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current!,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          once: true,
        },
      }
    )
  }, [])

  return (
    <section className="w-full max-w-[720px] mx-auto px-4 mb-[90px]">
      <div className="flex flex-col items-center gap-[18px] text-center mb-[68px]">
        <div className="flex gap-2.5 items-center">
          <span className="border-[0.5] w-[20px] h-[0.5px] border-black" />
          <p className="text-[1rem] text-black font-[400]">FAQ</p>
        </div>
        <h1 className="max-w-[615px] sm:text-[3.125rem]/[130%] text-[2rem]/[118%] font-semibold">
          Antworten auf Ihre häufigsten Fragen
        </h1>
      </div>

      <div ref={ref} className="flex flex-col gap-4">
        {data.map((item) => {
          const isOpen = opened.includes(item.value)
          return (
            <motion.div
              key={item.value}
              layout
              transition={{ duration: 0.3, ease: 'easeInOut' }}

              className={`rounded-[16px] overflow-hidden transition-colors duration-300 ease-out cursor-pointer ${
                isOpen ? 'bg-[#FFF9F5]' : 'bg-[#FFF]'
              }`}
            >
              <p className="font-[500] text-[1.125rem]">
                <button
                  onClick={() => toggle(item.value)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-black/90"
                >
                  <span className="mr-2">{item.value}</span>
                  <motion.div
                    initial={false}
                    animate={{ rotate: isOpen ? 360 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#FF6A00] rounded-full p-1 shadow-[0_0_10px_#FF6A00]"
                    >
                    <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                        <motion.div
                            key="x"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <FiX className="text-white w-4 h-4" />
                        </motion.div>
                        ) : (
                        <motion.div
                            key="plus"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 1 }}
                        >
                            <FiPlus className="text-white w-4 h-4" />
                        </motion.div>
                        )}
                    </AnimatePresence>
                    </motion.div>
                </button>
              </p>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-black/50 text-[15px] leading-relaxed">
                      {item.description.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
