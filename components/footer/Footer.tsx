'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { links } from '@/utils/Data';
import { NavigationProps } from '@/utils/Types';
import Socials from '../ui/Socials';

const Footer = ({ containerStyles, linkStyles, underlineStyles }: NavigationProps) => {
  const path = usePathname();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <footer className={`${containerStyles} bg-primary-30 py-12`}>
      <div className='container mx-auto flex flex-col items-center justify-between'>
        {/* Navigation */}
        <nav className='mb-6 flex flex-wrap justify-center gap-4'>
          {links.map((link, index) => (
            <Link href={link.path} key={index} className={`capitalize ${linkStyles}`}>
              <>
                {link.path === path && <span className={`${underlineStyles}`} key={link.name} />}
                {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
              </>
            </Link>
          ))}
        </nav>
        {/* Socials */}
        <Socials
          containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-6'
          iconsStyles='text-forerground-70 hover:text-secondary-50 transition-all'
        />
        {/* Copyright */}
        <div className='text-foreground-80 text-sm'>© {currentYear} Anis Ben Ferhat. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
