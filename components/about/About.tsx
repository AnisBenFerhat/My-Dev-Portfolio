import { techIcons } from '@/utils/Data';
import { BiCode } from 'react-icons/bi';
import { Tabs, TabsList, TabsTrigger } from '../ui/Tabs';

const About = () => {
  const categories = Array.from(new Set(techIcons.map((icon) => icon.category)));

  return (
    <section id='about' className='xl:h-[860px] pb-12 py-6 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          <BiCode className='inline-block text-4xl mr-2' /> About me
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Left Cell for Presentation */}
          <div className='xl:col-span-1 subtitle tracking-wide leading-[26px] border-secondary-10/50 px-4 xl:border-r-2'>
            <p className='mb-6'>
              Hey there, I'm Anis, a Paris-based frontend developer with a unique journey. I've spent over +15 years in
              retail, honing my skills in management, customer relations, and coaching. This diverse experience has
              equipped me with valuable insights into user experiences and effective team collaboration.
            </p>
            <p className='mb-6'>
              Alongside my retail journey, I delved into naturopathy and Shiatsu, exploring the intricate connections
              between well-being and technology. Now, I'm on a mission to fuse my rich background with my passion for
              programming to craft meaningful and user-centric digital experiences.
            </p>
            <p>
              I thrive on the problem-solving challenges that coding brings. Eager to embrace new technologies, I'm
              currently seeking opportunities to contribute to innovative projects as a frontend developer.
            </p>
          </div>

          {/* Border (Visible on Medium and Smaller Screens) */}
          <div className='xl:hidden border-b border-secondary-30/50 my-8 w-full'></div>

          {/* Right Cell */}
          <div className='xl:col-span-1 flex justify-center '>
            {/* Tabs Component */}
            <Tabs>
              <TabsList className='bg-secondary-70/80 text-primary-10'>
                <TabsTrigger className='hover:bg-secondary-10/50 ' value='tech-skill'>
                  Tech Stacks
                </TabsTrigger>
                <TabsTrigger className='hover:bg-secondary-10/50 ' value='soft-skill'>
                  Soft Skills
                </TabsTrigger>
                <TabsTrigger className='hover:bg-secondary-10/50 ' value='other-skill'>
                  More to know
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Rest of the Section */}
      </div>
    </section>
  );
};

export default About;
