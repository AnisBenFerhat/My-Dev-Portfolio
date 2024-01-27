// Component - UI
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';
import { AlignJustify } from 'lucide-react';

// Componnet
import Navigation from './Navigation';
import Logo from '../ui/Logo';
import Socials from '../ui/Socials';

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-36'>
            <Logo />
            <Navigation containerStyles='flex flex-col items-center gap-y-6 ' linkStyles='text-xl' />
          </div>
          <Socials containerStyles='flex gap-x-4' iconsStyles='text-2xl text-secondary-60 ' />
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNavigation;
