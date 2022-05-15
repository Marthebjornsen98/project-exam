import { Icon } from "@iconify/react";

const ChatModal = ({ setIsVisible }) => {
  return (
    <>
      <div className="" onClick={() => setIsOpen(true)} />
      <div className="modal__chat--message">
        <p className="modal__chat--text">
          <span className="bold">Hello!</span> You can always message us if you
          have a question!
        </p>
        <span className="modal__x--wrapper">
          <Icon
            icon="heroicons-solid:x"
            className="modal__close--btn modal__close--small"
            onClick={() => setIsVisible(false)}
          />
        </span>
      </div>
    </>
  );
};

export default ChatModal;
