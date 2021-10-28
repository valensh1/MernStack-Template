import './App.scss';
// import './sass';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //! MUST IMPORT BrowserRouter (changing name to just Router is optional) and Route and Switch
import Home from './views/Home.js';
import Roster from './views/Roster.js';
import NewPlayer from './views/NewPlayer.js';
import Navbar from './components/Navbar.js';
import ShowPlayer from './views/ShowPlayer.js';
import EditPlayer from './views/EditPlayer.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {/* //? INDEX ROUTE - SHOW ALL PLAYERS */}
          <Route exact path="/players">
            <Roster />
          </Route>

          {/* //? CREATE ROUTE - NEW PLAYER */}
          <Route exact path="/players/new">
            <NewPlayer />
          </Route>

          {/* //? EDIT ROUTE - EDIT INDIVIDUAL PLAYER */}
          <Route exact path="/players/edit/:id">
            <EditPlayer />
          </Route>

          {/* //? SHOW ROUTE - INDIVIDUAL PLAYER */}
          <Route exact path="/players/:id">
            <ShowPlayer />
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
