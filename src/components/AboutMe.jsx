import "../styling/AboutMe.css";
import SocialNav from "./SocialNav";
import SkillsSection from "./SkillsSection";
import TabComponent from './EducationExperience';
import FeaturedProjects from "./FeaturedProjects";

export default function AboutMe() {
  return (
    <>
      <div className="about-me">
        <h1>Hi, I'm Simon 👋</h1>
        <p>22 year old from Calgary, Alberta</p>
        <p>
          I'm a full stack developer with a love for caffeine and solving everyday problems with lines of code.
        </p>
        <SocialNav/>
        <SkillsSection/>
        <TabComponent/>
        <FeaturedProjects/>
        
      </div>
    </>
  );
}
