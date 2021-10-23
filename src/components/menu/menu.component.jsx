import Image from 'next/image';
import Link from 'next/link';

import logo from '../../assets/logo.svg';
import styles from './menu.module.scss';

const Menu = () => {
  return (
    <header className={styles.menuContainer}>
      <Link href="/">
        <a>
          <Image src={logo} alt="Workout" objectFit="contain" />
        </a>
      </Link>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link href="/">
              <a className={styles.active}>EXERCÍCIOS</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>COMUNIDADE</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>PREÇO</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>SOBRE</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.loginButton}>LOGIN</a>
            </Link>
            <Link href="/">
              <a className={styles.signInButton}>SIGN IN</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Menu };
