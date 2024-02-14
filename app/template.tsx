'use client';

import useScrollProgress from '@/hooks/useScrollProgress';
import { motion } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';

interface TemplateProps {
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }: TemplateProps) => {
  const completion = useScrollProgress();

  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrollHeight(totalHeight);
  }, []);

  return (
    <>
      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      {/* Completion Bar */}
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className='fixed z-50 bg-secondary-40/50 w-1 top-0 right-0 bottom-0 transition-all duration-700'
      ></span>
      <div className='h-full'></div>
    </>
  );
};

export default Template;
