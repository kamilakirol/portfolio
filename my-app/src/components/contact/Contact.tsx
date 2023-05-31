import Icon from "../common/Icon";
import Form from "./Form";

const Contact = () => {
  const socialData: any = [
    {
      nameIcon: "linkedInIcon",
      viewBox: "0 0 72 72",
      title: "LinkedIn",
      user: "Kamila Kirol",
      link: "https://www.linkedin.com/in/kamila-kirol/",
    },
    {
      nameIcon: "githubIcon",
      viewBox: "0 0 1024 1024",
      title: "Github",
      user: "kirolkamila",
      link: "https://github.com/kamilakirol",
    },
    {
      nameIcon: "emailIcon",
      viewBox: "0 0 122.88 88.86",
      title: "Gmail",
      user: "kirolkamila@gmail.com",
      link: "https://www.gmail.com",
    },
  ];

  return (
    <section className="contact">
      <Icon
        name="messageContact"
        viewBox="0 0 34560 13716"
        className="contact_icon"
        data-aos="fade-right"
      />
      <div className="container contact_container">
        <h2 className="title contact_title"> Contact</h2>
        <p className=" contact_text">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <div className="contact_content">
          <div className="contact_content_boxes">
            {socialData.map((item: any) => {
              return (
                <div className="contact_content_boxes_item" key={item.nameIcon}>
                  <Icon
                    name={item.nameIcon}
                    viewBox={item.viewBox}
                    className="contact_content_boxes_item_icon"
                  />
                  <p className="contact_content_boxes_item_title">
                    {item.title}
                  </p>
                  <p className="contact_content_boxes_item_text">{item.user}</p>
                </div>
              );
            })}
          </div>

          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
