import { NavLink } from "react-router-dom";

function NavBarS() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/home">
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="navbar-brand" to="/table">
                Table
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navbar-brand" to="/form">
                Form
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Ashes Test,2023
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Australia
                </a>
                <a className="dropdown-item" href="#">
                  England
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  India
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Test Cricket</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </div>
  );
} //end of function

export default NavBarS;
