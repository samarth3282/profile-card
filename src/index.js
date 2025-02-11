import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
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
function SkillList() {
  return (
    <div className="skill-list">
      <Skill text="DSA" backGroundColor="red" emoji="🧠" />
      <Skill text="HTML" backGroundColor="yellow" emoji="🏗️" />
      <Skill text="CSS" backGroundColor="blue" emoji="🎨" />
      <Skill text="JavaScript" backGroundColor="gold" emoji="⚡" />
      <Skill text="React" backGroundColor="lightblue" emoji="⚛️" />
      <Skill text="Web Design" backGroundColor="teal" emoji="🖌️" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.backGroundColor }}>
      <span>{props.text}</span>
      <span>{props.emoji}</span>
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
