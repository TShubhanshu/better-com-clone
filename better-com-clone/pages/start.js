import Form from '../components/Form';
import styles from '../styles/Start.module.css';

export default function StartPage() {
  return (
    <div className={styles.container}>
      <h1>Start Your Mortgage Application</h1>
      <Form />
    </div>
  );
}
