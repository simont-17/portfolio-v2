import "../styling/FeaturedProjects.css";

export default function FeaturedProjects() {
  return (
    <div className="featured-projects">
      <div className="featured-title">
        <p>Featured Projects</p>
        <a href="/projects">View More →</a>
      </div>
      <div className="featured-container">
      <div className="featured-cards featured-two">
          <div className="featured-image-container">
            <img src="../src/images/tagstart-preview.png" alt="Project 2" />
          </div>
          <div className="card-content">
            <h3>TagStart</h3>
            <p>A web application created to teach the fundamentals of web development.</p>
          </div>
        </div>
        <div className="featured-cards featured-two">
          <div className="featured-image-container">
            <img src="../src/images/cla-preview.png" alt="Project 2" />
          </div>
          <div className="card-content">
          <h3>Canadian Law Adventure</h3>
          <p>A gamified education tool that educates Canadians on their individual rights</p>
          </div>
        </div>
      </div>
    </div>
  );
}
