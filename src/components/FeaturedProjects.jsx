import "../styling/FeaturedProjects.css";

export default function FeaturedProjects() {
  return (
    <div className="featured-projects">
      <div className="featured-title">
        <p>Featured Projects</p>
        <a href="/portfolio-v2/projects">View More →</a>
      </div>
      <div className="featured-container">
        <div className="featured-cards featured-two">
          <div className="featured-image-container">
            <img src="public/tagstart-preview.png" alt="Project 2" />
          </div>
          <div className="card-content">
            <h3>TagStart</h3>
            <p>A senior project where we created a web application aimed to teach the fundamentals of web development.</p>
            <div className="tags">
              <span className="tag">Node.js</span>
              <span className="tag">Express.js</span>
              <span className="tag">React</span>
              <span className="tag">JavaScript</span>
              <span className="tag">MySQL</span>
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
            </div>
            <p>Private Source</p>
          </div>
        </div>
        <div className="featured-cards featured-two">
          <div className="featured-image-container">
            <img src="public/projectivity-preview.png" alt="Project 2" />
          </div>
          <div className="card-content">
                <h3>Projectivity</h3>
                <p>
                  An app that leverages AI to break projects into manageable
                  steps with deadlines.
                </p>
                <div className="tags">
                  <span className="tag">React</span>
                  <span className="tag">Express.js</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">CSS</span>
                  <span className="tag">HTML</span>
                </div>
                <a href="https://github.com/simont-17/mruhack_2024" target="_blank" className="source-button">
                  <p>Source</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </a>
              </div>
        </div>
      </div>
    </div>
  );
}
