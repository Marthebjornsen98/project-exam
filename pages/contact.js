import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

// Components
import { ContactWrapper } from "../styles/contact.style";
import ContactModal from "../components/Modals/ContactModal";

// Images
import contactImg from "../public/assets/contact_img.jpg";
import Logo from "../public/assets/holidaze-logo.svg";

// Formik
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

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

const Contact = () => {
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      let response = await axios.post(
        "http://localhost:1337/contact-messages",
        values
      );
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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <title>Contact us</title>
        <meta
          name="description"
          content="Welcome to Holidaze! We hope you find the hotel room you are looking for. Dont hesitate to contact us if you have any questions."
        />
      </Head>

      <ContactWrapper>
        <div className="contact">
          <div className="contact__img">
            <Image
              src={contactImg}
              layout="fill"
              className="contact__img--none"
              objectFit="cover"
              priority
            />
            <a href="/">
              <Image src={Logo} width={138} height={43} />
            </a>
          </div>

          <div className="logo__hidden">
            <a href="/">
              <Image src={Logo} width={138} height={43} />
            </a>
          </div>

          <div className="contact__right-side">
            <div className="contact__form">
              <div className="contact__title--wrapper">
                <h1 className="contact__title">Get in touch</h1>
                <p className="body-text">
                  Our friendly team would love to hear from you!
                </p>
              </div>

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
                  setIsOpen(true);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="contact__wrapper">
                      <div className="contact__name-email--wrapper">
                        <div className="contact__name-email">
                          <label className="label">Name</label>
                          <Field
                            name="name"
                            type="text"
                            className="input contact__input"
                          />
                          {errors.name && touched.name ? (
                            <div className="input__error">{errors.name}</div>
                          ) : null}
                        </div>

                        <div className="contact__name-email">
                          <label className="label">Email</label>
                          <Field
                            name="email"
                            type="email"
                            className="input contact__input"
                          />
                          {errors.email && touched.email ? (
                            <div className="input__error">{errors.email}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className="contact__input--container">
                        <label className="label">Subject</label>
                        <Field
                          name="subject"
                          type="text"
                          className="input contact__input"
                        />
                        {errors.subject && touched.subject ? (
                          <div className="input__error">{errors.subject}</div>
                        ) : null}
                      </div>

                      <div className="contact__input--container">
                        <label className="label">Message</label>
                        <Field
                          name="message"
                          component="textarea"
                          className="input contact__input--textarea"
                        />
                        {errors.message && touched.message ? (
                          <div className="input__error">{errors.message}</div>
                        ) : null}
                      </div>

                      {error ? (
                        <span className="input__error">
                          Your credentials is wrong
                        </span>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="contact__btn--wrapper">
                      <button type="submit" className="cta__sage hvr-grow">
                        Say hello!
                      </button>
                    </div>
                    {isOpen && <ContactModal setIsOpen={setIsOpen} />}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </ContactWrapper>
    </>
  );
};

export default Contact;
// onClick={() => setIsOpen(true)}
