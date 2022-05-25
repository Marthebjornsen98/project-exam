import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/holidaze-logo.svg";

// Components
import CheckoutDetails from "./checkoutDetails";

// Styling
import { CheckoutPage } from "./checkout.style.js";

const Checkout = ({
  setIsCheckout,
  title,
  adress,
  price,
  slider_img1,
  slider_img_alt_1,
}) => {
  const myLoader_1 = () => {
    return slider_img1;
  };
  return (
    <>
      <div className="modal-bg" onClick={() => setIsCheckout(false)} />
      <div className="modal modalCheckout">
        <div className="modal__content checkoutModal__content">
          <CheckoutPage>
            <div className="checkout">
              <Link href="/">
                <Image
                  src={Logo}
                  width={138}
                  height={43}
                  alt="Holidaze logo in green"
                />
              </Link>
              <div className="checkout__orderSummary">
                <h4 className="checkout__title">Order summary</h4>
                <div className="checkout__img--wrapper">
                  <Image
                    src={slider_img1}
                    loader={myLoader_1}
                    width={350}
                    height={200}
                    objectFit="cover"
                    alt={slider_img_alt_1}
                    className="checkout__img"
                  />
                  <Icon
                    icon="heroicons-solid:x"
                    className="modal__close--btn checkout__closeBtn"
                    onClick={() => setIsCheckout(false)}
                  />
                </div>

                <div className="checkout__summary">
                  <h3>{title}</h3>
                  <p className="checkout__summary--adress">{adress}</p>

                  <div className="checkout__summary--border"></div>

                  <div className="checkout__summary--discount">
                    <label className="checkout__summary--discountLabel">
                      Gift card/Discount code
                    </label>
                    <div className="checkout__summary--discountInput-wrapper">
                      <input
                        type="text"
                        name="discount"
                        className="input checkout__summary--discountInput"
                      />
                      <button className="cta__sage checkout__summary--discountBtn">
                        Apply
                      </button>
                    </div>

                    <div className="checkout__summary--border"></div>

                    <div className="checkout__summary--total">
                      <div className="checkout__summary--total-wrapper">
                        <span className="checkout__summary--total-label">
                          Subtotal
                        </span>
                        <p className="body-text checkout__summary--price">
                          ${price}
                        </p>
                      </div>

                      <div className="checkout__summary--total-wrapper">
                        <span className="checkout__summary--total-label">
                          Tax
                        </span>
                        <span className="body-text checkout__summary--price">
                          $25
                        </span>
                      </div>

                      <div className="checkout__summary--border"></div>

                      <div className="checkout__summary--total-wrapper">
                        <span className="checkout__summary--total-label">
                          Total
                        </span>
                        <span className="body-text checkout__summary--price">
                          $1025
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="paymentDetails">
              <div className="paymentDetails__wrapper">
                <div>
                  <h2>Payment details</h2>
                  <p className="body-text paymentDetails__subtext">
                    Complete your purchase by providing your payment details.
                  </p>
                </div>
                <CheckoutDetails />
              </div>
            </div>
          </CheckoutPage>
        </div>
      </div>
    </>
  );
};

export default Checkout;
