import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src={'/assets/logo/logo.svg'} width={100} height={100} priority alt='Logo' />
    </Link>
  );
};

export default Logo;
