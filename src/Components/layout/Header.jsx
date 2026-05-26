import { NavLink } from "react-router-dom";

export const Header = () => {
    const activeStyle = ({isActive})=>{
        return {color:isActive ? "red" : "black"
        }
    }
  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Get Thapa Membership, 30-day return or refund guarantee.</p>
            </div>

            <div className="sing_in_up">
              <NavLink to="/signin">SIGN IN</NavLink>
              <NavLink to="/signup">SIGN UP</NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/">
              <p>ThapaFlix</p>
            </NavLink>
          </div>
        </div>
        <nav className="navbar">
          <ul>
            <li className="nav-item"><NavLink to="/" className="nav-link" style={activeStyle}>Home</NavLink></li>
            <li className="nav-item"><NavLink to="/about" className="nav-link" style={activeStyle}>About</NavLink></li>
            <li className="nav-item"><NavLink to="/movie" className="nav-link" style={activeStyle}>Movies</NavLink></li>
            <li className="nav-item"><NavLink to="/contact"className="nav-link" style={activeStyle}>Contact</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
};