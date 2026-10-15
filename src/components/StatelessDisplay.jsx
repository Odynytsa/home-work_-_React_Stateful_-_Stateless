const StatelessDisplay = ({ count, step }) => {
  const message =
    count === 0 ? 'Лічильник на нулі' : count > 0 ? 'Позитивне значення' : 'Негативне значення';

  return (
    <div className="display">
      <p className="display-value" data-testid="counter-value">
        {count}
      </p>
      <p className="display-meta">
        Крок: <strong>{step}</strong> &middot; Статус: <strong>{message}</strong>
      </p>
    </div>
  );
};

export default StatelessDisplay;
