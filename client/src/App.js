import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //! MUST IMPORT BrowserRouter (changing name to just Router is optional) and Route and Switch
import Home from './views/Home.js';
import Roster from './views/Roster.js';
import NewPlayer from './views/NewPlayer.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/players">
            <Roster />
          </Route>

          <Route exact path="/players/new">
            <NewPlayer />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
