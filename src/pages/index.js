import styles from '../styles/Home.module.scss';

import { Menu } from '../components/menu/menu.component';
import { WorkoutPlan } from '../components/workout-plan/workout-plan.component';

export default function Home() {
  return (
    <div className={styles.container}>
      <Menu />
      <WorkoutPlan />
    </div>
  );
}
