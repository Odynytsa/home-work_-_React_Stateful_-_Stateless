import { Component } from 'react';
import StatelessDisplay from './StatelessDisplay.jsx';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, step: 1 };
  }

  componentDidMount() {
    document.title = `Лічильник (клас): ${this.state.count}`;
  }

  componentDidUpdate(_, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `Лічильник (клас): ${this.state.count}`;
    }
  }

  increment = () => {
    this.setState((prev) => ({ count: prev.count + prev.step }));
  };

  decrement = () => {
    this.setState((prev) => ({ count: prev.count - prev.step }));
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  handleStepChange = (event) => {
    const next = Number(event.target.value);
    this.setState({ step: Number.isFinite(next) && next > 0 ? next : 1 });
  };

  render() {
    const { count, step } = this.state;

    return (
      <section className="card">
        <h2>Class: лічильник на класі</h2>
        <p className="hint">Стан через this.state, цикл через lifecycle-методи</p>

        <StatelessDisplay count={count} step={step} />

        <div className="controls">
          <button type="button" onClick={this.decrement}>
            -{step}
          </button>
          <button type="button" onClick={this.reset} className="secondary">
            Скинути
          </button>
          <button type="button" onClick={this.increment} className="primary">
            +{step}
          </button>
        </div>

        <label className="step">
          Крок:
          <input type="number" min="1" value={step} onChange={this.handleStepChange} />
        </label>
      </section>
    );
  }
}

export default ClassCounter;
