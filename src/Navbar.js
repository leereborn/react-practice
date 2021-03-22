import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;