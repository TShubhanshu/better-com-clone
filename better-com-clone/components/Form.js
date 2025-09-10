import { useState } from 'react';
import styles from '../styles/Form.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" className={styles.formInput} required value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" className={styles.formInput} required value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <button className={styles.formButton} type="submit">Start Application</button>
      {submitted && <div className={styles.confirmation}>Thank you! We&apos;ll be in touch soon.</div>}
    </form>
  );
}
