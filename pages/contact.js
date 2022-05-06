import Head from "next/head";
import Image from "next/image";

// Form
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Images
import contactImg from "../public/assets/contact_img.jpg";
import Header from "../components/header";
import { ContactWrapper } from "../styles/contact.style";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Your email is not correct")
    .required("Email is required."),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <title>Log in</title>
        <meta
          name="description"
          content="Welcome to Holidaze! We hope you find the hotel room you are looking for. Dont hesitate to contact us if you have any questions."
        />
      </Head>
      <Header />

      <ContactWrapper>
        <Image src={contactImg} width={700} height={982} />

        <div className="contact">
          <h1>Get in touch</h1>
          <p className="body-text">
            Our friendly team would love to hear from you!
          </p>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="contact__wrapper">
                  <div className="contact__form--wrapper">
                    <div className="">
                      <label className="contact__label">Name</label>
                      <Field name="name" className="input contact__input" />
                      {errors.fullName && touched.fullName ? (
                        <div className="input__error">{errors.fullName}</div>
                      ) : null}
                      <label className="">Email</label>
                      <Field name="email" className="input contact__input" />
                      {errors.email && touched.email ? (
                        <div className="input__error">{errors.email}</div>
                      ) : null}
                    </div>

                    <label className="contact__label">Subject</label>
                    <Field
                      name="password"
                      type="password"
                      className="input contact__input"
                    />
                    {errors.subject && touched.subject ? (
                      <div className="input__error">{errors.subject}</div>
                    ) : null}
                  </div>
                </div>

                <div className="">
                  <button type="submit" className="cta__sage hvr-grow">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </ContactWrapper>
      <main className="hidden"></main>
    </>
  );
};

export default Contact;
