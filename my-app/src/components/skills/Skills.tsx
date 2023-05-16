import Icon from "../common/Icon";

const iconsSkills: any = [
  { name: "javascript", viewBox: "0 0 512 512" },
  { name: "react", viewBox: "-11.5 -10.23174 23 20.46348" },
  { name: "typescript", viewBox: "0 0 512 512" },
  { name: "nextjs", viewBox: "0 0 32 32" },
  { name: "sass", viewBox: "0 0 512 512" },
  { name: "HTML", viewBox: "0 0 32 32" },
  { name: "CSS", viewBox: "0 0 512 512" },
  { name: "git", viewBox: "0 0 92 92" },
  { name: "bootstrap", viewBox: "0 0 256 256" },
  { name: "tailwind", viewBox: "0 0 1000 1000" },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Icon
        name="whiteBoard"
        viewBox="0 0 782.81 688.75"
        className="skills_icon"
        fill="black"
      />
      <div className="container skills_container">
        <h2 className="title skills_title">My Skills</h2>
        <div className="skills_box">
          {iconsSkills.map((icon: any) => {
            return (
              <div className="skills_box_item" key={icon.name}>
                <Icon name={icon.name} viewBox={icon.viewBox} />
                <p className="skills_box_item_text">{icon.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
