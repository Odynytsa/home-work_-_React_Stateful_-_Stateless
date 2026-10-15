import { useEffect, useState } from 'react';
import StatelessDisplay from './StatelessDisplay.jsx';

const StatefulCounter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // Демонстрація useEffect як аналога життєвого циклу
  useEffect(() => {
    document.title = `Лічильник: ${count}`;
  }, [count]);

  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => prev - step);
  const reset = () => setCount(0);

  const handleStepChange = (event) => {
    const next = Number(event.target.value);
    setStep(Number.isFinite(next) && next > 0 ? next : 1);
  };

  return (
    <section className="card">
      <h2>Stateful: лічильник на хуках</h2>
      <p className="hint">Стан через useState, сайд-ефект через useEffect</p>

      <StatelessDisplay count={count} step={step} />

      <div className="controls">
        <button type="button" onClick={decrement}>
          -{step}
        </button>
        <button type="button" onClick={reset} className="secondary">
          Скинути
        </button>
        <button type="button" onClick={increment} className="primary">
          +{step}
        </button>
      </div>

      <label className="step">
        Крок:
        <input type="number" min="1" value={step} onChange={handleStepChange} />
      </label>
    </section>
  );
};

export default StatefulCounter;
