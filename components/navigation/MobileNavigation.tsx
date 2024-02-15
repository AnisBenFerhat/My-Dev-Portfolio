import { useState } from 'react';

// Component - UI
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/Sheet'; // Import SheetClose
import { AlignJustify } from 'lucide-react';

// Components
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
        <div className='flex flex-col items-center justify-around h-full py-8'>
          <div className='flex flex-col items-center gap-y-36'>
            <Logo />
            <Navigation
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='text-xl'
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
