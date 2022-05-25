import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react";

// Components
import { HolidazesWrapper } from "./holidazes.style";
import DeleteHotel from "../../Modals/DeleteHotel";

const Holidazes = ({ holidazes, jwt }) => {
  const [deleteHotel, setDeleteHotel] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const DescriptionText = ({ content, limit }) => {
    const [showAll, setShowAll] = useState(false);

    const showMore = () => setShowAll(true);
    const showLess = () => setShowAll(false);
    const toShow = content.substring(0, limit) + "...";

    if (content.lengdiv <= limit) {
      return <p>{content}</p>;
    }

    if (showAll) {
      return (
        <p className="body-text holidazes__description">
          {content}
          <p onClick={showLess} className="holidazes__readMore-readLess">
            Read less
          </p>
        </p>
      );
    }

    return (
      <p className="body-text holidazes__description">
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
              <h4 className="holidazes__table--title holidazes__img--wrapper">
                Image
              </h4>
              <h4 className="holidazes__table--title holidazes__title">Name</h4>
              <h4 className="holidazes__table--title holidazes__price">
                Price
              </h4>
              <h4 className="holidazes__table--title holidazes__featured">
                Featured
              </h4>
              <h4 className="holidazes__table--title holidazes__description">
                Description
              </h4>
              <h4 className="holidazes__table--title holidazes__delete">
                Delete
              </h4>
            </div>
            {holidazes.map(
              ({
                id,
                hotels_image,
                title,
                area,
                price,
                featured,
                description,
              }) => {
                const myLoader = () => {
                  return hotels_image;
                };

                return (
                  <div className="holidazes__table" key={id}>
                    <div className="body-text holidazes__table--item holidazes__id">
                      {id}
                    </div>
                    <div className="holidazes__table--item holidazes__img--wrapper">
                      <Image
                        src={hotels_image}
                        loader={myLoader}
                        width={150}
                        height={100}
                        alt="Image of the hotel interior"
                        className="holidazes__images"
                      />
                    </div>

                    <div className="holidazes__table--item-column holidazes__title">
                      <h4>{title}</h4>
                      <p className="body-text">{area}</p>
                    </div>
                    <p className="holidazes__table--item holidazes__price holidazes__price--number">
                      ${price}
                    </p>
                    <p className="body-text holidazes__table--item holidazes__featured">
                      {featured ? "Featured" : "Not Featured"}
                    </p>

                    <DescriptionText
                      content={description}
                      limit={50}
                      className="holidazes__table--item holidazes__description"
                    />
                    <button
                      className="holidazes__table--item holidazes__delete"
                      onClick={() => {
                        setDeleteHotel(true), setDeleteId(id);
                      }}
                    >
                      <Icon
                        icon="fluent:delete-24-regular"
                        className="holidazes__icon"
                      />
                    </button>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      {deleteHotel && (
        <DeleteHotel
          deleteId={deleteId}
          jwt={jwt}
          setDeleteHotel={setDeleteHotel}
        />
      )}
    </HolidazesWrapper>
  );
};

export default Holidazes;
