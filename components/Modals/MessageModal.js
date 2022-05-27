import axios from "axios";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { BaseUrl } from "../../libs/baseUrl";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name needs to be longer then 3 letters")
    .max(50, "Your name is too long")
    .required("Name is required"),
  subject: Yup.string()
    .min(3, "Subject needs to be longer then 3 letters")
    .max(50, "Your subject is too long")
    .required("Subject is required"),
  message: Yup.string()
    .min(3, "Message needs to be longer then 3 letters")
    .max(500, "Your message is too long")
    .required("Message is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const MessageModal = ({ setIsOpen }) => {
  const [error, setError] = useState(false);
  const [didSend, setDidSend] = useState(false);

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      let response = await axios.post(`${BaseUrl}hotel-messages`, values);
      setError(false);
      console.log(response);
    } catch (err) {
      console.log(err.data.response.message);
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          handleSubmit(values);
          setDidSend(true);
        }}
      >
        {({ errors, touched }) => (
          <>
            <div className="modal-bg" onClick={() => setIsOpen(false)} />
            <div className="modal">
              <div className="modal__close">
                <Icon
                  icon="heroicons-solid:x"
                  className="modal__close--btn"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              {didSend ? (
                <div className="modal__content modal__content--contact-page">
                  <Icon
                    icon="akar-icons:circle-check-fill"
                    className="modal__check"
                  />
                  <h2 className="modal__title">
                    Thanks for contacting the hotel
                  </h2>
                  <p className="body-text modal__text">
                    You will receive an answer to your question in 1-3 working
                    days!
                  </p>
                  <button
                    className="cta__sage modal__deleteBtn"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="modal__content">
                  <h2 className="modal__title">Contact Hotel</h2>
                  <p className="body-text modal__text">
                    Dont histate to leave us a message if you want to give us
                    some feedback or have any questions. We would love to hear
                    from you!
                  </p>

                  <Form className="modal__form">
                    <div className="modal__form--wrapper">
                      <div className="modal__input--wrapper">
                        <label className="label">Name</label>
                        <Field
                          name="name"
                          type="text"
                          className="input modal__input"
                        />
                        {errors.name && touched.name ? (
                          <span className="input__error">{errors.name}</span>
                        ) : null}
                      </div>

                      <div className="modal__input--wrapper">
                        <label className="label">Email</label>
                        <Field
                          name="email"
                          type="email"
                          className="input modal__input"
                        />
                        {errors.email && touched.email ? (
                          <span className="input__error">{errors.email}</span>
                        ) : null}
                      </div>
                    </div>

                    <div className="modal__input--container">
                      <label className="label">Subject</label>
                      <Field
                        name="subject"
                        type="text"
                        className="input modal__input"
                      />
                      {errors.subject && touched.subject ? (
                        <span className="input__error">{errors.subject}</span>
                      ) : null}
                    </div>

                    <div className="modal__input--container">
                      <label className="label">Message</label>
                      <Field
                        name="message"
                        component="textarea"
                        className="input modal__message"
                      />
                      {errors.message && touched.message ? (
                        <span className="input__error">{errors.message}</span>
                      ) : null}

                      {error ? (
                        <span className="input__error">
                          Your credentials is wrong
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="modal__btn">
                      <button type="submit" className="cta__sage">
                        Send message
                      </button>
                    </div>
                  </Form>
                </div>
              )}
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export default MessageModal;
