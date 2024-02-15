'use client';

import { useState } from 'react';

import MobileNavigation from '../navigation/MobileNavigation';
import Navigation from '../navigation/Navigation';
import Logo from '../ui/Logo';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='flex items-center'>
            <Navigation
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] w-full bg-secondary-60'
              setOpen={setIsMobileNavOpen}
            />
            <div className='xl:hidden'>
              <MobileNavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
