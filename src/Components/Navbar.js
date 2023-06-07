import { Link } from "react-router-dom";


// links the navbar to the routes
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        TastyBites
      </Link>
      <ul>
        <li>
          {/* <a href="/">Home</a> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <a href="/contact">Contact</a> */}
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
