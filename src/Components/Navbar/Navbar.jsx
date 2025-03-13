import './Navbar.css'

function Navbar() {
  return (
      <div className="navbar-holder">
          <header>
              <h1 className="navbar-header">RoberTools</h1>
          </header>

          <nav className="navbar">
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">History</a></li>
                  <li><a href="#">Legends</a></li>
                  <li><a href="#">Gallery</a></li>
              </ul>
          </nav>
      </div>
  );
}

export default Navbar;