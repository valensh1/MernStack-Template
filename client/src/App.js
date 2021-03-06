//! ALL RED COMMENTED SECTIONS ARE PLACES WHERE POTENTIAL CHANGES ARE NEEDED BASED UPON YOUR APPLICATION

import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // MUST IMPORT BrowserRouter (changing name to just Router is optional) and Route and Switch
import Home from './views/Home.js'; //! Update file names for whatever names you used that relate to your application
import Roster from './views/Roster.js'; //! Update file names for whatever names you used that relate to your application
import NewPlayer from './views/NewPlayer.js'; //! Update file names for whatever names you used that relate to your application
import Navbar from './components/Navbar.js'; //! Update file names for whatever names you used that relate to your application
import ShowPlayer from './views/ShowPlayer.js'; //! Update file names for whatever names you used that relate to your application
import EditPlayer from './views/EditPlayer.js'; //! Update file names for whatever names you used that relate to your application
import News from './views/News.js'; //! Update file names for whatever names you used that relate to your application
import Video from './views/Video.js'; //! Update file names for whatever names you used that relate to your application
import Stats from './views/Stats.js'; //! Update file names for whatever names you used that relate to your application
import Fantasy from './views/Fantasy.js'; //! Update file names for whatever names you used that relate to your application
import Shop from './views/Shop.js'; //! Update file names for whatever names you used that relate to your application

//! Update where it says players for whatever fits your application
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

          {/* //? NEWS PAGE */}
          <Route exact path="/news">
            <News />
          </Route>

          {/* //? VIDEO PAGE */}
          <Route exact path="/video">
            <Video />
          </Route>

          {/* //? STATS PAGE */}
          <Route exact path="/stats">
            <Stats />
          </Route>

          {/* //? FANTASY PAGE */}
          <Route exact path="/fantasy">
            <Fantasy />
          </Route>

          {/* //? SHOP PAGE */}
          <Route exact path="/shop">
            <Shop />
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
