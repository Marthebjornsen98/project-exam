import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

// Form
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Images
import logo from "../public/assets/holidaze-logo.svg";
import hikingImg from "../public/assets/login_img.jpg";
// import openEye from "../public/icons/openEye.svg";
// import closedEye from "../public/icons/closedEye.svg";

// Styles
import { LoginLogo, Login } from "../styles/login.style";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Your email is not correct")
    .required("Email is required."),
  password: Yup.string()
    .min(5, "You need more then 5 letters in your password")
    .max(50, "Your password is too long.")
    .required("Password is required"),
});

export const LogIn = () => {
  const [isChecked, setIsChecked] = useState(false);

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

      <Login>
        <div className="login">
          <div className="login__form--side">
            <LoginLogo>
              <a href="/">
                <Image
                  src={logo}
                  width={138}
                  height={43}
                  alt="Holidaze logo in green"
                />
              </a>
            </LoginLogo>
            <div>
              <div className="login__title--wrapper">
                <h1 className="login__title">Log in</h1>
                <p className="body-text login__text">
                  Welcome, create a user to save and book your favorite hotels!
                </p>
              </div>
              <div className="login__form--wrapper">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div>
                        <div className="login__form--container">
                          <label className="login__input--label">Email</label>
                          <Field
                            name="email"
                            className="input login__input--bar"
                          />
                          {errors.email && touched.email ? (
                            <div className="input__error">{errors.email}</div>
                          ) : null}
                        </div>

                        <div className="login__form--container">
                          <label className="login__input--label">
                            Password
                          </label>
                          <Field
                            name="password"
                            type="password"
                            className="input login__input--bar"
                          />
                          {errors.password && touched.password ? (
                            <div className="input__error">
                              {errors.password}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="login__btn--wrapper">
                        <button
                          type="submit"
                          className="cta__sage hvr-grow login__btn"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>

          <div className="login__img--side">
            <Image
              src={hikingImg}
              width={600}
              height={800}
              className="login__img"
            />
          </div>
        </div>
      </Login>

      <main className="hidden"></main>
    </>
  );
};

export default Login;
