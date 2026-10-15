import StatefulCounter from './components/StatefulCounter.jsx';
import ClassCounter from './components/ClassCounter.jsx';
import './App.css';

function App() {
  return (
    <main className="page">
      <header className="hero">
        <h1>Stateful vs Stateless</h1>
        <p>
          <code>StatefulCounter</code> зберігає стан через <code>useState</code>, а{' '}
          <code>StatelessDisplay</code> тільки приймає <code>props</code> і рендерить їх.
        </p>
      </header>

      <div className="grid">
        <StatefulCounter />
        <ClassCounter />
      </div>

      <section className="card compare">
        <h2>Порівняння: функції vs класи</h2>
        <ul>
          <li>
            <strong>Зручність:</strong> хуки коротші — немає конструктора і `this`.
          </li>
          <li>
            <strong>Читабельність:</strong> функція + деструктуризація пропсів читається простіше.
          </li>
          <li>
            <strong>Життєвий цикл:</strong> `useEffect` замінює `componentDidMount / DidUpdate`.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default App;
