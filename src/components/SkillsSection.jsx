import "../styling/skills.css";
import "../styling/TabList.css"


export default function SkillsSection() {


  const skills = [
    { name: "React", logo: "/portfolio-v2/react-logo.png"},
    { name: "Node.js", logo: "/portfolio-v2/node-logo.png" },
    { name: "Express.js", logo: "/portfolio-v2/express-logo.png" },
    { name: "Python", logo: "/portfolio-v2/python-logo.png"},
    { name: "JavaScript",logo: "/portfolio-v2/js-logo.png"  },
    { name: "SQL",logo: "/portfolio-v2/sql-logo.png"  },
    { name: "HTML", logo: "/portfolio-v2/html-logo.png"},
    { name: "CSS", logo: "/portfolio-v2/css-logo.png" },
  ];

  return (
    <div className="skills-section">
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          <div className="logo-container">
            <img src={(`${skill.logo}`)} alt={skill.name} />
          </div>
          <p>{skill.name}</p>
        </div>
      ))}
  
    </div>
  )
}
