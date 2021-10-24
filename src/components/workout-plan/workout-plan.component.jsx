import Image from 'next/image';
import Link from 'next/link';

import { WorkoutPlanCard } from '../../components/workout-plan-card/workout-plan-card.component';
import image from '../../assets/workout-plan.png';
import styles from './workout-plan.module.scss';

const WorkoutPlan = () => {
  return (
    <section className={styles.workoutPlan}>
      <div className={styles.workoutPlanText}>
        <div>
          <h1>4 WEEK</h1>
          <h2>WORKOUT PLAN</h2>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            fringilla, lacus eget consequat tincidunt, lectus ex bibendum
            libero, eget iaculis quam arcu quis mauris. Donec ex neque, egestas
            in faucibus. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          </p>
        </div>
        <div className={styles.buttons}>
          <Link href="/">
            <a className={styles.tryForFree}>Try for free</a>
          </Link>

          <Link href="/">
            <a className={styles.tryForFree}>Try for free</a>
          </Link>
        </div>
      </div>

      <div className={styles.right}>
        <Image
          src={image}
          alt="Workout Plan"
          olayout="fill"
          objectFit="contain"
        />

        <div className={styles.exploreMore}>
          <WorkoutPlanCard title={'Get inspired'}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringil. lacus eget consequat tincidunt, lectus ex.'
            }
          </WorkoutPlanCard>

          <WorkoutPlanCard title={'CHALLENGE YOURSELF'}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringil. lacus eget consequat tincidunt, lectus ex.'
            }
          </WorkoutPlanCard>
        </div>
      </div>
    </section>
  );
};
export { WorkoutPlan };
