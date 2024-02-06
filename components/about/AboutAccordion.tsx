// AboutAccordion.tsx

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/Accordion';
import { softSkills, techIcons, alsoData } from '@/utils/Data';
import { SoftSkillProps } from '@/utils/Types';

const AboutAccordion = () => {
  const categories = Array.from(new Set(techIcons.map((icon) => icon.category)));

  return (
    <>
      {/* Accordion for Tech Stacks */}
      <Accordion type='single' collapsible className='max-w-screen-lg mx-auto' defaultValue='expertise'>
        <AccordionItem value='expertise'>
          <AccordionTrigger>Programming Expertise</AccordionTrigger>
          <AccordionContent>
            {/* Tech Icons Content */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
              {categories.map((category) => (
                <div key={category} className='mb-4'>
                  <h3 className='font-semibold mb-2'>{category}</h3>
                  <div className='grid grid-cols-8 gap-2'>
                    {techIcons
                      .filter((icon) => icon.category === category)
                      .map((icon) => (
                        <div key={icon.name} className='flex items-center space-x-2'>
                          <img src={icon.path} alt={icon.name} className='w-6 h-6 object-contain' />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Accordion for Soft Skills */}
      <Accordion type='single' collapsible className='max-w-screen-lg mx-auto'>
        <AccordionItem value='soft-skills'>
          <AccordionTrigger>Soft Skills</AccordionTrigger>
          <AccordionContent>
            <div className='flex flex-wrap'>
              {softSkills.map((softSkill: SoftSkillProps, index) => (
                <span
                  key={index}
                  className='grid xl:grid-cols-3 shrink-0 py-1 px-2 rounded-full mb-2 bg-secondary-10/50 text-foreground-60 mr-2'
                >
                  {softSkill}
                </span>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Accordion for Other Skills */}
      <Accordion type='single' collapsible className='max-w-screen-lg mx-auto'>
        <AccordionItem value='also'>
          <AccordionTrigger>Also...</AccordionTrigger>
          <AccordionContent>
            {/* Language Skills */}
            <div className='mb-8'>
              <h3 className='text-lg mb-2'>{alsoData.languages.title}</h3>
              {/* Iterate over subcategories */}
              <div className='grid xl:grid-cols-3 gap-4'>
                {Object.keys(alsoData.languages.icons).map((subcategory) => (
                  <div key={subcategory} className='mb-4'>
                    <h4 className='mb-2 capitalize'>{subcategory}</h4>
                    <div className='grid grid-cols-6 gap-4'>
                      {/* Iterate over icons within subcategory */}
                      {Object.keys(alsoData.languages.icons[subcategory]).map((key) => (
                        <div key={key} className='flex items-center space-x-2'>
                          <img
                            src={alsoData.languages.icons[subcategory][key]}
                            alt={key}
                            className='w-6 h-6 object-contain'
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning */}
            <div className='mb-8'>
              <h3 className='text-lg mb-2'>{alsoData.learning.title}</h3>
              {/* Iterate over subcategories */}
              <div className='grid xl:grid-cols-3 gap-4'>
                {Object.keys(alsoData.learning.icons).map((subcategory) => (
                  <div key={subcategory} className='mb-4'>
                    <h4 className='mb-2 capitalize'>{subcategory}</h4>
                    <div className='grid grid-cols-6 gap-4'>
                      {/* Iterate over icons within subcategory */}
                      {Object.keys(alsoData.learning.icons[subcategory]).map((key) => (
                        <div key={key} className='flex items-center space-x-2'>
                          <img
                            src={alsoData.learning.icons[subcategory][key]}
                            alt={key}
                            className='w-6 h-6 object-contain'
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className='mb-8'>
              <h3 className='text-lg mb-2'>{alsoData.hobbies.title}</h3>
              {/* Iterate over subcategories */}
              <div className='grid xl:grid-cols-3 gap-4'>
                {Object.keys(alsoData.hobbies.icons).map((subcategory) => (
                  <div key={subcategory} className='mb-4'>
                    <h4 className='mb-2 capitalize'>{subcategory}</h4>
                    <div className='grid grid-cols-6 gap-4'>
                      {/* Iterate over icons within subcategory */}
                      {Object.keys(alsoData.hobbies.icons[subcategory]).map((key) => (
                        <div key={key} className='flex items-center space-x-2'>
                          <img
                            src={alsoData.hobbies.icons[subcategory][key]}
                            alt={key}
                            className='w-6 h-6 object-contain'
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AboutAccordion;
