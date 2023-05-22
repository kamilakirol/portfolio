import { FormEvent, useRef } from "react";
import emailjs from "emailjs-com";
import Button from "../common/Button";

const Form = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current !== null) {
      emailjs
        .sendForm(
          "contact_service",
          "contact_form",
          form.current,
          "Qudm7i7Z_iXaoSPkt"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      form.current.reset();
    }
  };

  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      <div className="form_group">
        <label htmlFor="name" className="form_group_label">
          Name
        </label>
        <input
          type="name"
          name="name"
          id="name"
          className="form_group_input"
          placeholder="Put your name"
        />
      </div>

      <div className="form_group">
        <label htmlFor="email" className="form_group_label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form_group_input"
          placeholder="Put your email"
        />
      </div>

      <div className="form_group">
        <label htmlFor="message" className="form_group_label">
          Message
        </label>
        <textarea
          className="form_group_textarea"
          id="message"
          name="message"
          placeholder="Put your message"
        ></textarea>
      </div>

      <Button type="submit" text="Submit" className="form_btn" />
    </form>
  );
};

export default Form;
