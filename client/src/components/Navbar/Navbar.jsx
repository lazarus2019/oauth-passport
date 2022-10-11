import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar({ user }) {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        Lazarus Blog
      </Link>
      {user ? (
        <ul className="list">
          <li className="list-item">
            <img
              className="avatar"
              src={user.picture || user.avatar_url}
              alt=""
            />
          </li>
          <li className="list-item">{user.name || user.login}</li>
          <span className="list-item" onClick={logout}>
            Logout
          </span>
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
