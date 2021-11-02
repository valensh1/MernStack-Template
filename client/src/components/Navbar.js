//! ALL RED COMMENTED SECTIONS ARE PLACES WHERE POTENTIAL CHANGES ARE NEEDED BASED UPON YOUR APPLICATION

import { Link } from 'react-router-dom';

//! Change navbar link names and actual links below to fit your application. For example, change "/news" to "/teams" and change the News navbar heading to Teams
function Navbar() {
  return (
    <div className="navbar">
      <div className="ul-container">
        <ul className="navbar--ul">
          <li>
            <Link to="/players" className="navbar--ul-link">
              Players
            </Link>
          </li>
          <li>
            <Link to="/news" className="navbar--ul-link">
              News
            </Link>
          </li>
          <li>
            <Link to="/video" className="navbar--ul-link">
              Video
            </Link>
          </li>
          <li>
            <Link to="/stats" className="navbar--ul-link">
              Stats
            </Link>
          </li>
          <li>
            <Link to="/fantasy" className="navbar--ul-link">
              Fantasy
            </Link>
          </li>
          <li>
            <Link to="/shop" className="navbar--ul-link">
              Shop
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
