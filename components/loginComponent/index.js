import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

import { LoginStyle } from "../../styles/login.style";

// Form
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "You need more then 5 letters in your password")
    .max(50, "Your password is too long.")
    .required("Password is required"),
  identifier: Yup.string().email("Invalid email").required("Email is required"),
});

const LoginComponent = () => {
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleSubmit = async (values) => {
    try {
      await axios.post("/api/login", { ...values });
      router.push("/admin");
      setError(false);
    } catch (err) {
      console.log(err.response.data.message);
      setError(true);
    }
  };

  return (
    <LoginStyle>
      <Formik
        initialValues={{
          identifier: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          handleSubmit(values);
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="login__form--container">
              <label htmlFor="identifier" className="login__input--label">
                Email
              </label>
              <Field
                type="email"
                name="identifier"
                className="input login__input--bar"
              />
              {errors.identifier && touched.identifier ? (
                <span className="input__error">{errors.identifier}</span>
              ) : null}
            </div>

            <div className="login__form--container">
              <label className="login__input--label">Password</label>
              <Field
                type="password"
                name="password"
                className="input login__input--bar"
              />
              {errors.password && touched.password ? (
                <span className="input__error">{errors.password}</span>
              ) : null}

              {error ? (
                <span className="input__error">Email or password is wrong</span>
              ) : (
                ""
              )}
            </div>

            <div className="login__btn--wrapper">
              <button className="cta__sage hvr-grow login__btn">Log in</button>
            </div>
          </Form>
        )}
      </Formik>
    </LoginStyle>
  );
};

export default LoginComponent;
