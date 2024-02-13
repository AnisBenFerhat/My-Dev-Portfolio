import Link from 'next/link';

// Component
import { Button } from '../ui/Button';

import { BsChevronCompactDown } from 'react-icons/bs';
import { BsFillSendFill } from 'react-icons/bs';
import { RiDownloadFill } from 'react-icons/ri';
import Socials from '../ui/Socials';

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-6 text-secondary-80/80 tracking-[4px]'>
              Frontend Developer
            </div>
            <h1 className='h1'>Anis</h1>
            <h1 className='h1 mb-6'>Ben Ferhat</h1>
            <div className='subtitle max-w-[300px] md:max-w-[480px] xl:max-w-[500px] mx-auto xl:mx-0 tracking-wide leading-[28px] '>
              <p>Crafting exceptional digital experiences is my passion. </p>
              <p>With a keen eye for detail and a love for problem-solving.</p>

              <p>I bring expertise in TypeScript, React, and NextJS.</p>
              <p>Let's write code that not only works but inspires!</p>
            </div>
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/#contact'>
                <Button className='gap-x-2'>
                  Contact me <BsFillSendFill />
                </Button>
              </Link>
              <a href='/assets/CV - Anis Ben Ferhat.pdf' download>
                <Button variant='outline' className='gap-x-2 '>
                  Download CV <RiDownloadFill size={18} color='#395591' />
                </Button>
              </a>
              <div className='flex justify-center items-center '>
                <Socials
                  containerStyles='flex gap-x-4 mx-auto xl:mx-0 xl:mt-0 min-w-[300px]:mt-32 '
                  iconsStyles='text-secondary-60/90 text-[24px] hover:text-secondary-20 transition-all'
                />
              </div>
            </div>
          </div>
          <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-20 animate-pulse xl:animate-bounce '>
            <BsChevronCompactDown className='text-3xl text-secondary-80 mb-24' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
