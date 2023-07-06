import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <strong>Dictionary</strong>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>This React App is coded by Cindy Verboog and is <a href="/">Open-Sourced</a> on GitHub</footer>
      </div>
    </div>
  );
}


