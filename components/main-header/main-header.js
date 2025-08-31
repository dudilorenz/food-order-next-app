import Link from "next/link";
import Image from "next/image";

import styles from './main-header.module.css';

import logoImg from '@/assets/logo.png';
import NavLink from "./nav-link";;

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logoImg.src} width={200} height={200} priority/>
        NextLevel Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href='/meals'>Meals</NavLink>
          </li>
          <li>
            <NavLink href='/community'>Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
