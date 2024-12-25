import "../styling/NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-fn">
          <p>SIMON TRUONG</p>
        </div>
        <div className="nav-tabs">
          <a>about me</a>
          <a>projects</a>
        </div>
      </nav>
    </>
  );
}
