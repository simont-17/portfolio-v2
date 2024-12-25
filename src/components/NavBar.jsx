import "../styling/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-fn">
        <p>&lt;/struong&gt;</p>
        </div>
        <div className="nav-tabs">
          <Link to="/about-me">about me</Link>
          <Link to="/projects">projects</Link>
        </div>
      </nav>
    </>
  );
}
