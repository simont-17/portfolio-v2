import "../styling/FeaturedProjects.css";

export default function FeaturedProjects() {
  return (
    <div className="featured-projects">
      <div className="featured-title">
        <p>featured projects</p>
        <p>view more →</p>
      </div>
      <div className="featured-container">
        <div className="featured-cards featured-one">
          <div className="featured-image-container"></div>
        </div>
        <div className="featured-cards featured-two">
          <div className="featured-image-container"></div>
          <p>test</p>
        </div>
      </div>
    </div>
  );
}
