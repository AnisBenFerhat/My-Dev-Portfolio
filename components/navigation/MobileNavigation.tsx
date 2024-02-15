import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';
import { AlignJustify } from 'lucide-react';
import Navigation from './Navigation';
import Logo from '../ui/Logo';
import Socials from '../ui/Socials';

const MobileNavigation = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center'>
            <Logo />
            <Navigation
              containerStyles='flex flex-col items-center gap-y-4 py-8'
              linkStyles='text-xl'
              underlineStyles='absolute left-0 top-full h-[2px] w-full bg-secondary-60'
              setOpen={setSheetOpen}
            />
          </div>
          <Socials containerStyles='flex gap-x-4' iconsStyles='text-2xl text-secondary-60' />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
