import About from '@/components/about/About';
import Experience from '@/components/experience/Experience';
import Hero from '@/components/hero/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
    </main>
  );
}
