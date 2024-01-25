import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const WorkSans = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anis | Frontend Web Developer',
  description:
    'Welcome to my portfolio! I am Anis, a passionate frontend web developer dedicated to coding beautiful and aesthetically pleasing websites with Typescript, React and NextJS. Explore my projects, skills, and experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={WorkSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
