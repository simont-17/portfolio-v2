import "../styling/skills.css";
import "../styling/TabList.css"


export default function SkillsSection() {


  const skills = [
    { name: "React", logo: "public/react-logo.png"},
    { name: "Node.js", logo: "public/node-logo.png" },
    { name: "Express.js", logo: "public/express-logo.png" },
    { name: "Python", logo: "public/python-logo.png"},
    { name: "JavaScript",logo: "public/js-logo.png"  },
    { name: "SQL",logo: "public/sql-logo.png"  },
    { name: "HTML", logo: "public/html-logo.png"},
    { name: "CSS", logo: "public/css-logo.png" },
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
