import './Navbar.css'
import settingsImg from '../../assets/settings.png'
import { Link } from "react-router-dom";
function Navbar() {
  return (
      <div className="navbar-holder">
          <header className="navbar-header">
              <h1 className="navbar-header-p">RoberTools</h1>
              <img title="icon" src={settingsImg} className="navbar-img"></img>
          </header>

          <div className="navbar">

              <div className="holographic-container">
                  <div className="holographic-card"> {/*add more paths towards pages*/}
                      <Link to="/WebMouseTester/" className="navbar-option">Mouse Tester</Link> 
                  </div>
              </div>
              <div className="holographic-container navbar-option-disabled">
                  <div className="holographic-card">
                      <a className="navbar-option navbar-option-disabled">Keyboard Tester</a>
                  </div>
              </div>
              <div className="holographic-container navbar-option-disabled">
                  <div className="holographic-card">
                      <a className="navbar-option navbar-option-disabled">Controller Tester</a>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Navbar;