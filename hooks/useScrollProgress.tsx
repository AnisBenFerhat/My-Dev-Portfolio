import { useState, useEffect } from 'react';

type ScrollProgress = number;

const useScrollProgress = (): ScrollProgress => {
  const [completion, setCompletion] = useState<ScrollProgress>(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        const calculatedCompletion = Number((currentProgress / scrollHeight).toFixed(2)) * 100;
        setCompletion(calculatedCompletion);
      }
    };

    window.addEventListener('scroll', updateScrollCompletion);

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    };
  }, []);

  return completion;
};

export default useScrollProgress;
