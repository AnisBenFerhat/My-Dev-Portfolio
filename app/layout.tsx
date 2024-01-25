import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';

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
    <html lang='en'>
      <body className={WorkSans.className}>{children}</body>
    </html>
  );
}
