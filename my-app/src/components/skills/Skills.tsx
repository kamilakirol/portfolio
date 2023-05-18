import Icon from "../common/Icon";

const iconsSkills: any = [
  { name: "javascript", viewBox: "0 0 512 512", aosDelay: "100" },
  { name: "react", viewBox: "-11.5 -10.23174 23 20.46348", aosDelay: "100" },
  { name: "typescript", viewBox: "0 0 512 512", aosDelay: "200" },
  { name: "nextjs", viewBox: "0 0 32 32", aosDelay: "200" },
  { name: "sass", viewBox: "0 0 512 512", aosDelay: "300" },
  { name: "HTML", viewBox: "0 0 32 32", aosDelay: "300" },
  { name: "CSS", viewBox: "0 0 512 512", aosDelay: "400" },
  { name: "git", viewBox: "0 0 92 92", aosDelay: "400" },
  { name: "bootstrap", viewBox: "0 0 256 256", aosDelay: "500" },
  { name: "tailwind", viewBox: "0 0 1000 1000", aosDelay: "500" },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Icon
        name="whiteBoard"
        viewBox="0 0 782.81 688.75"
        className="skills_icon"
        fill="black"
        data-aos="zoom-in"
      />
      <div className="container skills_container">
        <h2 className="title skills_title" data-aos="fade-right">
          My Skills
        </h2>
        <div className="skills_box">
          {iconsSkills.map((icon: any) => {
            return (
              <div
                className="skills_box_item"
                key={icon.name}
                data-aos="fade-right"
                data-aos-delay={icon.aosDelay}
              >
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
