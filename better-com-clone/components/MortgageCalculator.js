import { useState } from 'react';
import styles from '../styles/MortgageCalculator.module.css';

export default function MortgageCalculator() {
  const [principal, setPrincipal] = useState('');
  const [interest, setInterest] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState('');

  function calculate() {
    const p = parseFloat(principal);
    const r = parseFloat(interest) / 100 / 12;
    const n = parseFloat(years) * 12;
    if (p > 0 && r > 0 && n > 0) {
      const monthly = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setResult(monthly.toFixed(2));
    } else {
      setResult('Invalid input');
    }
  }

  return (
    <div className={styles.calculator}>
      <label>
        Loan Amount:
        <input type="number" className={styles.numberInput} value={principal} onChange={e => setPrincipal(e.target.value)} />
      </label>
      <label>
        Interest Rate (%):
        <input type="number" className={styles.numberInput} value={interest} onChange={e => setInterest(e.target.value)} />
      </label>
      <label>
        Loan Term (years):
        <input type="number" className={styles.numberInput} value={years} onChange={e => setYears(e.target.value)} />
      </label>
      <button className={styles.calcButton} onClick={calculate}>
       Calculate
        </button>
        {result && (
       <div className={styles.result}>
       Monthly Payment: <span>{result}</span>
       </div>
      )}
    </div>
  );
}
