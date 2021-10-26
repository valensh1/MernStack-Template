import logo from './logo.svg';
import './App.css';
import Home from './views/Home.js';
import Roster from './views/Roster.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Hey Dude Bro this is a test to make sure React is working!!!</h1>
        <Home />
        <Roster />
      </header>
    </div>
  );
}

export default App;
