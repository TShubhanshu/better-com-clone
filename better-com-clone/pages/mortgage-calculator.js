import MortgageCalculator from '../components/MortgageCalculator';
import styles from '../styles/MortgageCalculator.module.css';

export default function MortgageCalculatorPage() {
  return (
    <div className={styles.container}>
      <h1>Mortgage Calculator</h1>
      <MortgageCalculator />
    </div>
  );
}
