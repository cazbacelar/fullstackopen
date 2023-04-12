import { useState } from "react";

const Statistics = (props) => {
  return (
    <div>
      <p>
        {props.text} {props.value}
      </p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
      <h2>Statistics</h2>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={good + neutral + bad} />
      <Statistics text="average" value={(good + neutral + bad) / 3} />
      <Statistics text="positive" value={(good / (good + neutral + bad)) * 100} />
    </div>
  );
};

export default App;
