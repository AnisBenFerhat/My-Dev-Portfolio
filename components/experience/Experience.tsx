import { educationData, experienceData } from '@/utils/Data';
import { BiCode } from 'react-icons/bi';
import { FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id='experience' className='scroll-mt-28 pb-12 py-6 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          <BiCode className='inline-block text-4xl mr-2' /> Experience and Education
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Experience */}
          <div>
            {experienceData.map((exp, index) => (
              <div key={index} className='mb-8 border-l-4 border-secondary-10/45 pl-4'>
                <p className='text-sm font-medium text-foreground-80/60 mb-2'>{exp.duration}</p>
                <h3 className='text-lg font-semibold text-secondary-90/80 mb-2'>{exp.position}</h3>
                <p className='text-sm text-foreground-80 italic'>
                  {exp.company} - {exp.location}
                </p>
              </div>
            ))}
          </div>
          {/* Education */}
          <div>
            {educationData.map((edu, index) => (
              <div key={index} className='mb-8 border-l-4 border-secondary-10/45 pl-4'>
                <p className='text-sm font-medium text-foreground-80/60 mb-2'>{edu.duration}</p>
                <h3 className='text-lg font-semibold text-secondary-90/80 mb-2'>{edu.title}</h3>
                <p className='text-sm text-foreground-80 italic'>{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
