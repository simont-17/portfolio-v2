import "../styling/AboutMe.css";
import SocialNav from "./SocialNav";
import SkillsSection from "./SkillsSection";

export default function AboutMe() {
  return (
    <>
      <div className="about-me">
        <h1>hi, i'm simon</h1>
        <p>22 year old, calgary-based</p>
        <p>
          A full stack developer with a love for caffeine and solving problems
          with code
        </p>
        <SocialNav/>
        <SkillsSection/>
      </div>
    </>
  );
}
