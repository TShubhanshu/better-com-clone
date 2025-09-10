import styles from '../styles/AboutUs.module.css';

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Our Mission</h2>
        <p>We’re on a mission to make home financing, buying, and ownership simpler, faster, and fairer for all Americans.</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Our Story</h2>
        <p>Founded in 2016, Better leverages technology and transparency to empower you to take control of your homeownership journey.</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Who We Serve</h2>
        <p>First-time buyers, refinancers, and anyone looking for an honest mortgage experience.</p>
      </section>
    </div>
  );
}
