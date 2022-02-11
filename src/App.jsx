import logo from './logo.svg';
import './App.css';
import dayjs from 'dayjs';

// https://www.elle.com/culture/movies-tv/a39011464/beyonce-oscar-nomination/
const date1 = dayjs('2022-02-08');
const date2 = dayjs(undefined, "MM-DD-YYYY");
const days = date2.diff(date1, 'days', true); // difference in days

const diff = Math.floor(days);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {<p>{diff} days since Beyoncé was <a href="https://www.elle.com/culture/movies-tv/a39011464/beyonce-oscar-nomination/">nominated.</a></p>}
        <p>
          <img src="https://ca-times.brightspotcdn.com/dims4/default/ff9c897/2147483647/strip/true/crop/4000x3000+0+0/resize/840x630!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa2%2F16%2Fa42fd5144e2f84008ee32d465ffb%2F591520.jpg" />
        </p>
      </header>
    </div>
  );
}

export default App;
