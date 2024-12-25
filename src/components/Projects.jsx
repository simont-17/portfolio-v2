import "../styling/Projects.css";

export default function Projects() {
  return (
    <>
      <div className="projects-section">
        <h1>My Projects</h1>
        <div className="featured-projects">
          <div className="featured-container">
            <div className="featured-cards featured-two">
              <div className="featured-image-container">
                <img src="../src/images/tagstart-preview.png" alt="Project 2" />
              </div>
              <div className="card-content">
                <h3>TagStart</h3>
                <p>
                  A web application created to teach the fundamentals of web
                  development.
                </p>
                <div className="tags">
                  <span className="tag">Node.js</span>
                  <span className="tag">Express.js</span>
                  <span className="tag">React</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">MySQL</span>
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                </div>
              </div>
            </div>
            <div className="featured-cards featured-two">
              <div className="featured-image-container">
                <img src="../src/images/cla-preview.png" alt="Project 2" />
              </div>
              <div className="card-content">
                <h3>Canadian Law Adventure</h3>
                <p>
                  A gamified education tool that educates Canadians on their
                  rights
                </p>
                <div className="tags">
                  <span className="tag">Python</span>
                  <span className="tag">Pygame</span>
                </div>
              </div>
            </div>
            <div className="featured-cards featured-three">
              <div className="featured-image-container">
                <img src="../src/images/cla-preview.png" alt="Project 2" />
              </div>
              <div className="card-content">
                <h3>Portfolio</h3>
                <p>
                A fast and lightweight portfolio website made to showacse my experience, projects and accomplishments.
                </p>
                <div className="tags">
                  <span className="tag">React</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">CSS</span>
                  <span className="tag">HTML</span>
                </div>
              </div>
            </div>
            <div className="featured-cards featured-four">
              <div className="featured-image-container">
                <img src="../src/images/projectivity-preview.png" alt="Project 2" />
              </div>
              <div className="card-content">
                <h3>Projectivity</h3>
                <p>
                An app that leverages AI to break projects into manageable steps with deadlines.
                </p>
                <div className="tags">
                <span className="tag">React</span>
                  <span className="tag">Express.js</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">CSS</span>
                  <span className="tag">HTML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
