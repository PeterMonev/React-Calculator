import { Link } from "react-router-dom";
import "../Header/Header.css";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contacts</Link>
        </ul>
      </nav>
    </header>
  );
};
