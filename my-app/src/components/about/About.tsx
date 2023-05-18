import Icon from "../common/Icon";
import MeImg from "../../images/me_img.png";
import Button from "../common/Button";

const About = () => {
  return (
    <section className="about" id="about">
      <Icon
        name="aboutKeyboard"
        viewBox="0 0 841.9 426.2"
        color="#575756"
        className="about_svg"
      />
      <div className="container about_container">
        <img
          src={MeImg}
          alt=" avatar Kamila Kirol"
          className="about_img"
          data-aos="flip-down"
          data-aos-delay="300"
        />
        <div className="about_box " data-aos="zoom-in">
          <h2 className="title about_box_title">This is me</h2>
          <p className="text about_box_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button text="Get in touch" className="about_box_btn" />
        </div>
      </div>
    </section>
  );
};

export default About;
