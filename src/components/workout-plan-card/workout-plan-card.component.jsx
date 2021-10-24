import Image from 'next/image';
import Link from 'next/link';

import arrowIcon from '../../assets/arrow-icon.svg';
import styles from './workout-plan-card.module.scss';

const WorkoutPlanCard = ({ title, children }) => {
  return (
    <div className={styles.workoutPlanCard}>
      <h1>{title}</h1>
      <p>{children}</p>

      <div className={styles.exploreMore}>
        <Image src={arrowIcon} alt="Explore more" />
        <Link href={'/'}>
          <a>Explore More</a>
        </Link>
      </div>
    </div>
  );
};

export { WorkoutPlanCard };
