import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Better Mortgage: Simple, Online, AI-Powered Mortgage</h1>
        <p>Get a mortgage faster, easier and more transparent online. No salesperson. No hidden fees. Just your best loan.</p>
        <Link href="/start" className={styles.cta}>
          Get Started
        </Link>
      </section>
      <section className={styles.features}>
        <h2>What We Offer</h2>
        <ul>
          <li>Transparent pricing</li>
          <li>Fully online process</li>
          <li>Trusted by thousands</li>
        </ul>
      </section>
    </div>
  );
}
