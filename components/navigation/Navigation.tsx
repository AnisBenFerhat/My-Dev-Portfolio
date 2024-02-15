import Link from 'next/link';
import { motion } from 'framer-motion';

// Props
import { NavigationProps } from '@/utils/Types';
import { usePathname } from 'next/navigation';
import { links } from '@/utils/Data';

const Navigation = ({ containerStyles, linkStyles, underlineStyles, setOpen }: NavigationProps) => {
  const path = usePathname();

  // Function to close the sheet when a link is clicked
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link href={link.path} key={index} className={`capitalize ${linkStyles}`} onClick={handleClick}>
          <>
            {link.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId='underline'
                className={`${underlineStyles}`}
                key={link.name}
              />
            )}
            {link.name}
          </>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
