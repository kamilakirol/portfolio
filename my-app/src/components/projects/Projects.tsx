import ButtonProjects from "../common/ButtonProjects";
import ImgPortfolio from "../../images/portfolio_img.png";
import ImgSensOfMove from "../../images/sensOfMove_img.jpg";
import ImgReturnThins from "../../images/returnThings_img.jpg";
import ImgAppToDo from "../../images/appToDo_img.jpg";

const Projects = () => {
  const projectsList = [
    {
      img: ImgPortfolio,
      alt: "image portfolio Kamili Kirol",
      title: "My portfolio",
      text: " Static website built with React, Typescript, SCSS, Formik, Yup and AOS ",
      code: "https://github.com/kamilakirol/portfolio/tree/main",
      page: "https://kirolkamila.netlify.app/",
    },
    {
      img: ImgReturnThins,
      alt: "image website return things",
      title: "Return things",
      text: "Web application in React and Typescript with Firebase as data source",
      code: "https://github.com/kamilakirol/oddam_w_dobre_rece",
      page: "https://givethings-kamilakirol.netlify.app/",
    },
    {
      img: ImgAppToDo,
      alt: "image website app to do",
      title: "Task management app",
      text: "ToDo list with advanced state management (useReducer by React)",
      code: "https://github.com/kamilakirol/App_ToDo",
      page: "https://todoapp-kamilakirol.netlify.app/",
    },

    {
      img: ImgSensOfMove,
      alt: "image website sensory integration",
      title: "Sensory integration ",
      text: "Simple landing page for sensory integration therapy built in React",
      code: "https://github.com/kamilakirol/SenseofMove",
      page: "https://websitesenseofmove-kamilakirol.netlify.app/",
    },
  ];

  return (
    <section className="projects">
      <div className="container projects_container">
        <h2 className="title projects_title">Projects</h2>
        <div className="projects_box">
          {projectsList.map((item) => {
            return (
              <div
                className="projects_box_item"
                data-aos="fade-up"
                data-aos-mirror="false"
                data-aos-duration="1000"
                key={item.title}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="projects_box_item_img"
                  data-aos="flip-right"
                  data-aos-delay="200"
                />
                <div className="projects_box_item_container">
                  <h3 className="projects_box_item_container_title">
                    {item.title}
                  </h3>
                  <p className="text projects_box_item_container_text">
                    {item.text}
                  </p>
                  <div className="projects_box_item_container_btns">
                    <ButtonProjects
                      text="Code"
                      className="btn projects_box_item_container_btns_btn"
                      link={item.code}
                    />
                    <ButtonProjects
                      text="Live"
                      className="btn projects_box_item_container_btns_btn"
                      link={item.page}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
