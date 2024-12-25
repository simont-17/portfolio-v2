import "../styling/skills.css";
import "../styling/TabList.css"


export default function SkillsSection() {


  const skills = [
    { name: "React", logo: "../src/images/react-logo.png"},
    { name: "Node.js", logo: "../src/images/node-logo.png" },
    { name: "Express.js", logo: "../src/images/express-logo.png" },
    { name: "Python", logo: "../src/images/python-logo.png"},
    { name: "JavaScript",logo: "../src/images/js-logo.png"  },
    { name: "SQL",logo: "../src/images/sql-logo.png"  },
    { name: "HTML", logo: "../src/images/html-logo.png"},
    { name: "CSS", logo: "../src/images/css-logo.png" },
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
