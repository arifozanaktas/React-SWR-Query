import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>Arif</h1>
        </Link>
        <div className="navbar-links">
          <Link className="nav-item" to="/listQuery">ListQuery</Link>
          <Link className="nav-item" to="/listSWR">ListSWR</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;