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
            I’m a Junior Frontend Developer, who is passionate about creating
            websites and applications. I’m developing my skills in JavaScript,
            React and Next.js. I like to discover new possibilities and
            libraries. I'm eager to find best solutions for all problems. I'm
            currently looking for a new challenges.
          </p>
          <Button text="Get in touch" className="about_box_btn" />
        </div>
      </div>
    </section>
  );
};

export default About;
