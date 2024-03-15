import Image from 'next/image';
import { BiCode } from 'react-icons/bi';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { IoLogoGithub } from 'react-icons/io';
import { MdWeb } from 'react-icons/md';
import { myWork } from '@/utils/Data';

const Work = () => {
  return (
    <section id='work' className='scroll-mt-12 pb-12 py-6 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          <BiCode className='inline-block text-4xl mr-2' /> My Work
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
          {myWork.map((item) => (
            <div key={item.id} className='max-w-lg mx-auto'>
              <Card className='bg-primary-10/60 rounded-lg shadow-md overflow-hidden border-secondary-10/70 text-center h-full'>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <div className='relative w-64 h-48 mx-auto my-4'>
                  <Image src={item.screenshot} alt={item.title} layout='fill' objectFit='cover' />
                </div>
                <CardContent className='px-4'>
                  <CardDescription className='mb-4'>{item.description}</CardDescription>
                  <div>
                    {item.github ? (
                      <a
                        href={item.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center justify-center text-primary-500 hover:text-secondary-50 '
                      >
                        <IoLogoGithub className='mr-2' />
                        Go to the Repository
                      </a>
                    ) : item.website ? (
                      <a
                        href={item.website}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center justify-center text-primary-500 hover:text-secondary-50 '
                      >
                        <MdWeb className='mr-2' /> {}
                        Go to the Website
                      </a>
                    ) : null}{' '}
                    {}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
