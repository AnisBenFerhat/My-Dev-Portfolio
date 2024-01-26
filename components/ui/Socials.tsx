import Link from 'next/link';

// Data
import { icons } from '@/utils/Data';

// Props
import { SocialProps } from '@/utils/Types';

const Socials: React.FC<SocialProps> = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target='_blank'>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};
export default Socials;
