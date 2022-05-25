import { HolidazesWrapper } from "../holidazes/holidazes.style";
import { useState } from "react";

const Messages = ({ messages }) => {
  const MessageText = ({ content, limit }) => {
    const [showAll, setShowAll] = useState(false);

    const showMore = () => setShowAll(true);
    const showLess = () => setShowAll(false);
    const toShow = content.substring(0, limit) + "...";

    if (content.lengdiv <= limit) {
      return <p>{content}</p>;
    }

    if (showAll) {
      return (
        <p className="body-text holidazes__message">
          {content}
          <p onClick={showLess} className="holidazes__readMore-readLess">
            Read less
          </p>
        </p>
      );
    }

    return (
      <p className="body-text holidazes__message">
        {toShow}
        <p onClick={showMore} className="holidazes__readMore-readLess">
          Read more
        </p>
      </p>
    );
  };
  return (
    <HolidazesWrapper>
      <div className="modal modal__admin">
        <div className="modal__content">
          <div className="holidazes">
            <div className="holidazes__table">
              <h4 className="holidazes__table--title holidazes__id">Id</h4>
              <h4 className="holidazes__table--title holidazes__title">Name</h4>
              <h4 className="holidazes__table--title holidazes__email">
                Email
              </h4>
              <h4 className="holidazes__table--title holidazes__subject">
                Subject
              </h4>
              <h4 className="holidazes__table--title holidazes__message">
                Message
              </h4>
            </div>
          </div>
        </div>

        {messages.map(({ id, name, email, subject, message }) => {
          return (
            <div className="holidazes__table" key={id}>
              <p className="body-text holidazes__table--item holidazes__id">
                {id}
              </p>
              <p className="body-text holidazes__table--item-column holidazes__title">
                {name}
              </p>
              <p className="body-text holidazes__table--item-column holidaze__email">
                {email}
              </p>
              <p className="body-text holidazes__table--item holidazes__subject">
                {subject}
              </p>
              <div className="holidazes__table--item holidazes__message">
                <MessageText content={message} limit={150} />
              </div>
            </div>
          );
        })}
      </div>
    </HolidazesWrapper>
  );
};

export default Messages;
