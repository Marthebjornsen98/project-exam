import Image from "next/image";
import { HotelCards } from "./hotelCards.style";
import Link from "next/link";
import { Icon } from "@iconify/react";

const HotelCard = ({
  id,
  title,
  location,
  price,
  description,
  details: { balcony, free_wifi, bed_size, persons, metro },
  hotels_image,
  stars,
}) => {
  const myLoader = () => {
    return hotels_image;
  };
  return (
    <HotelCards>
      <div className="hotelImg__wrapper">
        <Image
          className="hotelImg"
          loader={myLoader}
          src={hotels_image}
          layout="fill"
          objectFit="cover"
          href={"/hotelDetails/" + id}
          alt="This is a hotelroom with a nice bed and quality room."
        />
      </div>
      <div className="hotelContent">
        <Link href={"/hotelDetails/" + id} passHref>
          <h3 className="hotelContent__title">{title}</h3>
        </Link>
        <p className="hotelContent__location">{location}</p>
        <div className="hotelContent__star">
          {stars.map(({ id, star }) => {
            if (star) {
              return (
                <div key={id} className="hotelContent__star--wrapper">
                  <Icon icon="clarity:star-solid" color="#57b15b" />
                </div>
              );
            } else {
              return (
                <div key={id} className="hotelContent__star--wrapper">
                  <Icon icon="clarity:star-line" color="#57b15b" />
                </div>
              );
            }
          })}
        </div>

        <h3 className="hotelContent__price">
          ${price}/<span className="hotelContent__price--span">per night</span>
        </h3>
        <p className="body-text hotelContent__description">{description}</p>
        <div className="hotelContent__details--wrapper">
          <div>
            <p className="hotelContent__details">{balcony ? "Balcony" : ""}</p>
            <p className="hotelContent__details">
              {free_wifi ? "Free Wifi" : ""}
            </p>
            <p className="hotelContent__details">
              {bed_size ? "Queen Size bed" : "King Size bed"}
            </p>
            <p className="hotelContent__details">
              {persons ? "Two Pers" : "Four Pers"}
            </p>
            <p className="hotelContent__details">
              {metro ? "Metro access" : ""}
            </p>
          </div>
          <div>
            <h4 className="hotelContent__cancellation">Free cancellation</h4>
            <Link href={"/hotelDetails/" + id} passHref>
              <a>
                <button className="cta__sage hvr-grow">Book room</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </HotelCards>
  );
};

export default HotelCard;
