import styles from '../styles/Home.module.scss';

import { Menu } from '../components/menu/menu.component';

export default function Home() {
  return (
    <div className={styles.container}>
      <Menu />
      <h1>Workout Project</h1>
    </div>
  );
}
