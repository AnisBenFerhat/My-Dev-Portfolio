// About.tsx

import { BiCode } from 'react-icons/bi';
import AboutAccordion from './AboutAccordion';

const About = () => {
  return (
    <section id='about' className='pb-12 py-6 xl:py-24 mt-28 sm:mt-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto mt-24'>
          <BiCode className='inline-block text-4xl mr-2' /> About me
        </h2>

        <div className='border-b border-secondary-10/50 mb-8 max-w-screen-md mx-auto px-4'>
          <p className='subtitle tracking-wide leading-[26px]'>
            Hey there, I'm Anis, a Paris-based frontend developer with a unique journey. I've spent over +15 years in
            retail, honing my skills in management, customer relations, and coaching. This diverse experience has
            equipped me with valuable insights into user experiences and effective team collaboration.
          </p>
          <p className='subtitle tracking-wide leading-[26px]'>
            Alongside my retail journey, I delved into naturopathy and Shiatsu, exploring the intricate connections
            between well-being and technology. Now, I'm on a mission to fuse my rich background with my passion for
            programming to craft meaningful and user-centric digital experiences.
          </p>
          <p className='subtitle tracking-wide leading-[26px]'>
            I thrive on the problem-solving challenges that coding brings. Eager to embrace new technologies, I'm
            currently seeking opportunities to contribute to innovative projects as a frontend developer.
          </p>
        </div>

        {/* Render the AboutAccordion component */}
        <AboutAccordion />
      </div>
    </section>
  );
};

export default About;
