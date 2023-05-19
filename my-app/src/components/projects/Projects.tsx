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
      text: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      code: "wp.pl",
      page: "onet.pl",
    },
    {
      img: ImgReturnThins,
      alt: "image website return things",
      title: "Return things",
      text: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      code: "https://github.com/kamilakirol/oddam_w_dobre_rece",
      page: "https://givethings-kamilakirol.netlify.app/",
    },
    {
      img: ImgAppToDo,
      alt: "image website app to do",
      title: "ToDo App",
      text: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      code: "https://github.com/kamilakirol/App_ToDo",
      page: "https://todoapp-kamilakirol.netlify.app/",
    },

    {
      img: ImgSensOfMove,
      alt: "image website sensory integration",
      title: "Sensory integration ",
      text: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="projects_box_item_img"
                  data-aos="flip-right"
                  data-aos-delay="300"
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
                      text="View the code"
                      className="btn projects_box_item_container_btns_btn"
                      link={item.code}
                    />
                    <ButtonProjects
                      text="Visit the app"
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
