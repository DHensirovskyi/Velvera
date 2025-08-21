'use client';

import Link from 'next/link';
import { Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const links = [
  { path: '/#über_uns', title: 'Über uns' },
  { path: '/#leistungen', title: 'Leistungen' },
  { path: '/#ablauf', title: 'Ablauf' },
  { path: '/#bewertungen', title: 'Bewertungen' },
];

export default function Header() {
  const [opened, { close, toggle }] = useDisclosure(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] h-20 w-full flex items-center bg-white">
      <div className="w-full max-w-[1150px] mx-auto lg:px-0 px-5 flex items-center justify-between">
        <Link href={'/'}>
          <h1 className="text-[1.75rem] tracking-[-1.4px] font-[600]">Velvéra</h1>
        </Link>

        <nav className="hidden sm:flex gap-6 font-medium text-[0.938rem] text-black/70">
          {links.map(l => <Link key={l.title} href={l.path}>{l.title}</Link>)}
        </nav>

        <Link
          href="/#kontakt"
          className="hidden sm:inline-flex items-center justify-center px-[18px] py-2 bg-[#1F1F1F] text-white rounded-[12px] text-[0.938rem] font-medium"
        >
          Kontakt
        </Link>

        <div className="sm:hidden">
          <Burger opened={opened} onClick={toggle} size="sm" lineSize={2} color="black"/>
        </div>
      </div>

      <Drawer
        opened={opened}
        onClose={close}
        position="top"
        size="xs"
        offset={0}
        overlayProps={{ opacity: 0.01}}
        styles={{
          content: { backgroundColor: 'white' },
          header: { backgroundColor: 'white'},
        }}
      >
        <div className="flex flex-col gap-6 mt-10 items-center">
          {links.map(l => (
            <Link key={l.title} href={l.path} onClick={close} className='text-[1rem] text-black/70'>{l.title}</Link>
          ))}
        </div>
      </Drawer>
    </header>
  );
}
