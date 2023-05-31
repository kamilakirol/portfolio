import emailjs from "emailjs-com";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const Form = () => {
  const [infoSubmitted, setInfoSubmitted] = useState("");

  const formik = useFormik({
    //we have created our initailValues object in a format EmailJS accepts

    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name field is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email field is required"),
      message: Yup.string().required("Message field is required"),
    }),
    onSubmit: (values, action) => {
      try {
        emailjs
          .send("contact_service", "contact_form", values, "Qudm7i7Z_iXaoSPkt")
          .then(() => {
            action.setSubmitting(false);
            setInfoSubmitted(
              "Thank you! Your form deliwery submission has been received."
            );
            action.resetForm();
          });
      } catch {
        action.setSubmitting(false);
      }
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="form_group">
        <label htmlFor="name" className="form_group_label">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="off"
          className={`form_group_input ${
            formik.touched.name && formik.errors.name && "error_input"
          }`}
          placeholder="Put your name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        <p
          className={`error ${
            formik.touched.name && formik.errors.name && "show"
          }`}
        >
          {formik.errors.name}
        </p>
      </div>

      <div className="form_group">
        <label htmlFor="email" className="form_group_label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="off"
          className={`form_group_input ${
            formik.touched.email && formik.errors.email && "error_input"
          }`}
          placeholder="Put your email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        <p
          className={`error ${
            formik.touched.email && formik.errors.email && "show"
          }`}
        >
          {formik.errors.email}
        </p>
      </div>

      <div className="form_group">
        <label htmlFor="message" className="form_group_label">
          Message
        </label>
        <textarea
          className={`form_group_textarea ${
            formik.touched.message && formik.errors.message && "error_input"
          }`}
          id="message"
          name="message"
          autoComplete="off"
          placeholder="Put your message"
          onChange={formik.handleChange}
          value={formik.values.message}
          onBlur={formik.handleBlur}
        ></textarea>
        <p
          className={`error ${
            formik.touched.message && formik.errors.message && "show"
          }`}
        >
          {formik.errors.message}
        </p>
      </div>

      <button type="submit" className="btn form_btn">
        Send
      </button>
      <div className="infoSubmitted">{infoSubmitted}</div>
    </form>
  );
};

export default Form;
