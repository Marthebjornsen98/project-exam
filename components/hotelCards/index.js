import Image from "next/image";
import { HotelCards } from "./hotelCards.style";
import Link from "next/link";

const HotelCard = ({
  id,
  title,
  location,
  price,
  description,
  details: { balcony, free_wifi, bed_size, persons, metro },
  hotels_image,
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
          width={510}
          height={360}
          href={"/hotelDetails/" + id}
          alt="This is a hotelroom with a nice bed and quality room."
        />
      </div>
      <div className="hotelContent">
        <Link href={"/hotelDetails/" + id}>
          <h3 className="hotelContent__title">{title}</h3>
        </Link>
        <p className="hotelContent__location">{location}</p>
        <h3 className="hotelContent__price">
          ${price}/<span className="hotelContent__price--span">per night</span>
        </h3>
        <p className="body-text">{description}</p>
        <div className="hotelContent__details--wrapper">
          <div>
            <h4 className="hotelContent__details">
              {balcony ? "Balcony" : ""}
            </h4>
            <h4 className="hotelContent__details">
              {free_wifi ? "Free Wifi" : ""}
            </h4>
            <h4 className="hotelContent__details">
              {bed_size ? "Queen Size bed" : "King Size bed"}
            </h4>
            <h4 className="hotelContent__details">
              {persons ? "Two Pers" : "Four Pers"}
            </h4>
            <h4 className="hotelContent__details">
              {metro ? "Metro access" : ""}
            </h4>
          </div>
          <div>
            <h4 className="hotelContent__cancellation">Free cancellation</h4>
            <Link href={"/hotelDetails/" + id}>
              <a className="cta__sage hvr-grow">Book room</a>
            </Link>
          </div>
        </div>
      </div>
    </HotelCards>
  );
};

export default HotelCard;
