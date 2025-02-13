import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
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
      {/* <Skill text="DSA" backGroundColor="red" emoji="🧠" />
      <Skill text="HTML" backGroundColor="yellow" emoji="🏗️" />
      <Skill text="CSS" backGroundColor="blue" emoji="🎨" />
      <Skill text="JavaScript" backGroundColor="gold" emoji="⚡" />
      <Skill text="React" backGroundColor="lightblue" emoji="⚛️" />
      <Skill text="Web Design" backGroundColor="teal" emoji="🖌️" /> */}
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
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
