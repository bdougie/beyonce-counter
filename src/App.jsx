import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import dayjs from 'dayjs';

function App() {
  const [count, setCount] = useState(0);
  const date1 = dayjs('2022-02-08');
  const date2 = dayjs('2022-02-10');

  const days = date2.diff(date1, 'days', true); // difference in days

  return (
    <div className="App">
      <header className="App-header">
        {<p>{days} days since Beyoncé was noiminated.</p>}
        <p>
          <img src="https://ca-times.brightspotcdn.com/dims4/default/ff9c897/2147483647/strip/true/crop/4000x3000+0+0/resize/840x630!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa2%2F16%2Fa42fd5144e2f84008ee32d465ffb%2F591520.jpg" />
        </p>
      </header>
    </div>
  );
}

export default App;
