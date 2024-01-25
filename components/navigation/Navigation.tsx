import Link from 'next/link';

// Next Hooks
import { usePathname } from 'next/navigation';

// Framer
import { motion } from 'framer-motion';

// Props
import { NavigationProps } from '@/utils/Types';

// Data
import { links } from '@/utils/Data';

const Navigation = ({ containerStyles, linkStyles, underlineStyles }: NavigationProps) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link href={link.path} key={index} className={`capitalize ${linkStyles}`}>
          <>
            {link.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId='underline'
                className={`${underlineStyles}`}
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