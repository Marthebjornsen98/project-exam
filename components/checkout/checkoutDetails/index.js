import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { CheckoutForm } from "./checkoutDetails.style";
import Confetti from "react-confetti";

// Formik
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  cardName: Yup.string()
    .min(3, "Name needs to be longer then 3 letters")
    .max(50, "Your name is too long")
    .required("Name is required"),
  cardNumber: Yup.string()
    .min(19, "Card number needs to be 16 letters")
    .max(20, "Card number subject is too long")
    .required("Card number is required"),
  experation: Yup.string()
    .min(5, "Experation is too short")
    .max(5, "Experation is too long")
    .required("Experation is required"),
  cvc: Yup.string()
    .min(3, "CVC is too short")
    .max(3, "CVC is too long")
    .required("CVC is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const width = "1440px";
const height = "1000px";

const CheckoutDetails = () => {
  const [confetti, setConfetti] = useState(false);

  return (
    <Formik
      initialValues={{
        email: "",
        cardName: "",
        cardNumber: "",
        experation: "",
        cvc: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={() => {
        setConfetti(true);
      }}
    >
      {({ errors, touched }) => (
        <>
          {confetti ? (
            <>
              <div className="modal-bg" onClick={() => setConfetti(false)} />
              <div className="modal">
                <div className="modal__close">
                  <Icon
                    icon="heroicons-solid:x"
                    className="modal__close--btn"
                    onClick={() => setConfetti(false)}
                  />
                </div>
                <div className="modal__content modal__content--contact-page">
                  <Icon
                    icon="akar-icons:circle-check-fill"
                    className="modal__check"
                  />
                  <h2 className="modal__title">Thanks for your order!</h2>
                  <p className="body-text modal__text">
                    Yay! Your payment was successful, and your booking is
                    complete. A receipt and confirmation is on its way to your
                    inbox.
                  </p>
                  <Link href="/hotels" passHref>
                    <a>
                      <button
                        className="cta__sage modal__deleteBtn"
                        onClick={() => setConfetti(false)}
                      >
                        Continue shopping
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
              <Confetti width={width} height={height} />
              <Form>
                <CheckoutForm>
                  <div className="checkoutForm">
                    <div className="checkoutForm__input--wrapper">
                      <label className="label">Email</label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="kari.normann@gmail.com"
                        className="input checkoutForm__input"
                      />
                      {errors.email && touched.email ? (
                        <div className="input__error">{errors.email}</div>
                      ) : null}
                    </div>

                    <div className="checkoutForm__input--wrapper">
                      <label className="label">Name on card</label>
                      <Field
                        name="cardName"
                        type="text"
                        placeholder="Kari Nordmann"
                        className="input checkoutForm__input"
                      />
                      {errors.cardName && touched.cardName ? (
                        <div className="input__error">{errors.cardName}</div>
                      ) : null}
                    </div>

                    <div className="checkoutForm__input--wrapper">
                      <label className="label">Card number</label>
                      <Field
                        name="cardNumber"
                        placeholder="**** **** **** 4567"
                        className="input checkoutForm__input--overpass"
                      />
                      {errors.cardNumber && touched.cardNumber ? (
                        <div className="input__error">{errors.cardNumber}</div>
                      ) : null}
                    </div>
                    <div className="checkoutForm__input--flex">
                      <div className="checkoutForm__input--wrapper checkoutForm__input--half">
                        <label className="label">Experation</label>
                        <Field
                          name="experation"
                          placeholder="MM/YY"
                          className="input checkoutForm__input--overpass"
                        />
                        {errors.experation && touched.experation ? (
                          <div className="input__error">
                            {errors.experation}
                          </div>
                        ) : null}
                      </div>
                      <div className="checkoutForm__input--wrapper checkoutForm__input--half">
                        <label className="label">CVC</label>
                        <Field
                          name="cvc"
                          placeholder="***"
                          className="input checkoutForm__input--overpass"
                        />
                        {errors.cvc && touched.cvc ? (
                          <div className="input__error">{errors.cvc}</div>
                        ) : null}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="cta__sage hvr-grow checkoutForm__btn"
                    >
                      Checkout
                    </button>
                    <p className="body-text checkoutForm__privacy">
                      By clicking checkout, you agree to terms of service and
                      privacy policy.
                    </p>
                  </div>
                </CheckoutForm>
              </Form>
            </>
          ) : (
            <Form>
              <CheckoutForm>
                <div className="checkoutForm">
                  <div className="checkoutForm__input--wrapper">
                    <label className="label">Email</label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="kari.normann@gmail.com"
                      className="input checkoutForm__input"
                    />
                    {errors.email && touched.email ? (
                      <div className="input__error">{errors.email}</div>
                    ) : null}
                  </div>

                  <div className="checkoutForm__input--wrapper">
                    <label className="label">Name on card</label>
                    <Field
                      name="cardName"
                      type="text"
                      placeholder="Kari Nordmann"
                      className="input checkoutForm__input"
                    />
                    {errors.cardName && touched.cardName ? (
                      <div className="input__error">{errors.cardName}</div>
                    ) : null}
                  </div>

                  <div className="checkoutForm__input--wrapper">
                    <label className="label">Card number</label>
                    <Field
                      name="cardNumber"
                      placeholder="**** **** **** 4567"
                      className="input checkoutForm__input--overpass"
                    />
                    {errors.cardNumber && touched.cardNumber ? (
                      <div className="input__error">{errors.cardNumber}</div>
                    ) : null}
                  </div>
                  <div className="checkoutForm__input--flex">
                    <div className="checkoutForm__input--wrapper checkoutForm__input--half">
                      <label className="label">Experation</label>
                      <Field
                        name="experation"
                        placeholder="MM/YY"
                        className="input checkoutForm__input--overpass"
                      />
                      {errors.experation && touched.experation ? (
                        <div className="input__error">{errors.experation}</div>
                      ) : null}
                    </div>
                    <div className="checkoutForm__input--wrapper checkoutForm__input--half">
                      <label className="label">CVC</label>
                      <Field
                        name="cvc"
                        placeholder="***"
                        className="input checkoutForm__input--overpass"
                      />
                      {errors.cvc && touched.cvc ? (
                        <div className="input__error">{errors.cvc}</div>
                      ) : null}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="cta__sage hvr-grow checkoutForm__btn"
                  >
                    Checkout
                  </button>
                  <p className="body-text checkoutForm__privacy">
                    By clicking checkout, you agree to terms of service and
                    privacy policy.
                  </p>
                </div>
              </CheckoutForm>
            </Form>
          )}
        </>
      )}
    </Formik>
  );
};

export default CheckoutDetails;
