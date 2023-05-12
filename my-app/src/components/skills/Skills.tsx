import Icon from "../common/Icon";

const iconsSkills: any = [
  { name: "javascript", viewBox: "0 0 24 24" },
  { name: "react", viewBox: "0 0 512 512" },
  { name: "typescript", viewBox: "0 0 24 24" },
  { name: "nextjs", viewBox: "0 0 32 32" },
  { name: "sass", viewBox: "0 0 32 32" },
  { name: "html", viewBox: "0 0 1024 1024" },
  { name: "css", viewBox: "0 0 32 32" },
  { name: "git", viewBox: "0 0 92 92" },
  { name: "bootstrap", viewBox: "0 0 16 16" },
  { name: "tailwind", viewBox: "0 0 512 512" },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Icon
        name="whiteBoard"
        viewBox="0 0 782.81 688.75"
        className="skills_icon"
      />
      <div className="coniatner skills_container">
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
