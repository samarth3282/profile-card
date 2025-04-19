import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#E34F26", // HTML5’s official logo color (orange-red)
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#F7DF1E", // JavaScript’s official yellow (from the JS logo)
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#2AB7CA", // A vibrant teal inspired by design tools like Figma
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#61DAFB", // React’s official cyan (from its logo)
  },
  {
    skill: "Vue",
    level: "intermediate",
    color: "#4FC08D", // Vue’s official green (from its logo)
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#181717", // GitHub’s dark charcoal (from its logo and UI)
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList skills={skills} />
      </div>
    </div>
  );
}
function Avatar() {
  return <img src="image.JPG" alt="profilePhoto" className="avatar" />;
}
function Intro() {
  return (
    <div>
      <h1>Samarth Patel</h1>
      <p>
        I am disciplined, focused, and hardworking, excelling in coding,
        fitness, and problem-solving. With an analytical and innovative mindset,
        I balance growth, health, and family with determination and passion. 🚀
      </p>
    </div>
  );
}
function SkillList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  const textColor = skill === "Git and GitHub" ? "#FFFFFF" : "#000000";
  const isLowContrast = color === "#F7DF1E"; // JavaScript's yellow

  return (
    <div className="skill" style={{ backgroundColor: color, color: textColor }}>
      <span>{skill}</span>
      <span style={{ filter: isLowContrast ? "invert(1)" : "none" }}>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
