import Button from "../common/Button";
import Icon from "../common/Icon";

const Banner = () => {
  return (
    <section className="banner" id="banner">
      <Icon
        name="bannerLaptop"
        viewBox="0 0 2000 2000"
        className="banner_img"
      />
      <div className="container banner_container">
        <div>
          <p className="banner_hi">Hi,</p>
        </div>
        <h1 className="banner_title">I'm Kamila Kirol</h1>
        <p className="banner_text">a frontend developer</p>
        <Button text="Projects" className="banner_btn" />
      </div>
    </section>
  );
};

export default Banner;
