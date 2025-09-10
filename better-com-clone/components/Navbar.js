import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Better.in</a> {/* You can change this to an image or icon if you have one */}
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/"><span>Home</span></Link>
        <Link href="/about-us"><span>About Us</span></Link>
        <Link href="/mortgage-calculator"><span>Mortgage Calculator</span></Link>
        <Link href="/start"><span>Start</span></Link>
      </div>
    </nav>
  );
}
