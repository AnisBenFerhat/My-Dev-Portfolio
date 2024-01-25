'use client';

import Navigation from '../navigation/Navigation';
import Logo from '../ui/Logo';

const Header = () => {
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
            />
            <div className='xl:hidden'>Mobile Navigation</div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
