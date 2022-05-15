import { Icon } from "@iconify/react";

const ContactModal = ({ setIsOpen }) => {
  return (
    <div>
      <div className="modal-bg" onClick={() => setIsOpen(false)} />
      <div className="modal">
        <div className="modal__close">
          <Icon
            icon="heroicons-solid:x"
            className="modal__close--btn"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="modal__content modal__content--contact-page">
          <div className="modal__check">
            <Icon
              icon="akar-icons:circle-check-fill"
              className="modal__check"
            />
          </div>

          <h2 className="modal__title">Thanks for contacting us!</h2>
          <p className="body-text modal__text">
            We have sent you an confirmation link to your email and we will get
            in touch with you as quickly as possible. We are here to help you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
