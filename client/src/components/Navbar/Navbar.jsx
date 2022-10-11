import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar({ user }) {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        Lazarus Blog
      </Link>
      {user ? (
        <ul className="list">
          <li className="list-item">
            <img className="avatar" src={user.picture} alt="" />
          </li>
          <li className="list-item">{user.name}</li>
          <span className="list-item">Logout</span>
        </ul>
      ) : (
        <Link to="/login" className="link">
          Login
        </Link>
      )}
    </div>
  );
}

export default Navbar;
