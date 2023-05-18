import ButtonProjects from "../common/ButtonProjects";
import Icon from "../common/Icon";

const Projects = () => {
  return (
    <section className="projects">
      <div className="container projects_container">
        <h2 className="title projects_title">Projects</h2>
        <div className="projects_box">
          <Icon
            name="laptopProjects"
            viewBox="0 0 3000 2500"
            className="projects_box_img"
          />

          <div className="projects_box_item">
            <h3 className="projects_box_item_title">Tytuł projektu</h3>
            <p className="text projects_box_item_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="projects_box_item_btns">
              <ButtonProjects
                text="View the code"
                className="btn projects_box_item_btns_btn"
              />
              <ButtonProjects
                text="Visit the app"
                className="btn projects_box_item_btns_btn"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
