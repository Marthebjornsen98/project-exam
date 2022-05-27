import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";

// Hotel img and description
import { HotelCards } from "../../components/hotelCards/hotelCards.style";

//hotel detail icons
import personIcon from "../../public/icons/person_icon.svg";
import numberReviewIcon from "../../public/icons/number_review_icon.svg";
import guestReviewIcon from "../../public/icons/guest_review_icon.svg";
import nonSmokingIcon from "../../public/icons/nonSmoking_icon.svg";

//hotel facility icons
import barIcon from "../../public/icons/bar_icon.svg";
import breakfastIcon from "../../public/icons/breakfast_icon.svg";
import teaCoffeeIcon from "../../public/icons/coffee_icon.svg";
import fitnessIcon from "../../public/icons/fitness_icon.svg";
import parkingIcon from "../../public/icons/parking_icon.svg";
import restaurantIcon from "../../public/icons/restaurant_icon.svg";
import roomServiceIcon from "../../public/icons/roomService_icon.svg";
import swimmingpoolIcon from "../../public/icons/swimmingpool_icon.svg";
import { BaseUrl } from "../../libs/baseUrl";

//about section
import {
  HotelDetailsWrapper,
  HotelDetail__about,
  HotelIcons,
  Facilities,
  GuestReview,
  ProgressButton,
} from "../../styles/id.style";

// Components
import Header from "../../components/header";
import Checkout from "../../components/checkout";
import MessageModal from "../../components/Modals/MessageModal";
import ChatModal from "../../components/Modals/ChatModal";
import CostumerReviewContainer from "../../components/costumerReview";
import Footer from "../../components/footer";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// Progress bar
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

export const getStaticPaths = async () => {
  const res = await fetch(`${BaseUrl}holidazes`);
  const data = await res.json();

  const paths = data.map(({ id }) => {
    return {
      params: { id: id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`${BaseUrl}holidazes/` + id);
  const data = await res.json();

  return {
    props: { hotelDetail: data },
  };
};

const HotelDetails = ({
  hotelDetail: {
    title,
    location,
    price,
    description,
    details: { balcony, free_wifi, bed_size, persons, metro },
    slider_img: {
      slider_img1,
      slider_img_alt_1,
      slider_img_2,
      slider_img_alt_2,
      slider_img_3,
      slider_img_alt_3,
      slider_img_4,
      slider_img_alt_4,
    },
    about_title,
    about,
    map,
    area,
    adress,
    facilities: {
      teaCoffee_maker,
      room_service,
      gym,
      bar,
      nonSmoking_rooms,
      breakfast,
      private_parking,
      restaurant,
      swimming_pool,
    },
  },
}) => {
  const myLoader_1 = () => {
    return slider_img1;
  };
  const myLoader_2 = () => {
    return slider_img_2;
  };
  const myLoader_3 = () => {
    return slider_img_3;
  };
  const myLoader_4 = () => {
    return slider_img_4;
  };
  const myLoader_map = () => {
    return map;
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isCheckout, setIsCheckout] = useState(false);

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <meta
          name="description"
          content={`Welcome to Holidaze! This is ${title}, we hope you find the room you are looking for. Dont hesitate to contact us if you have any questions.`}
        />
        <title>{title}</title>
      </Head>
      <Header />
      <main>
        <HotelDetailsWrapper>
          <div className="swiper__wrapper">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src={slider_img1}
                  width={550}
                  height={420}
                  loader={myLoader_1}
                  alt={slider_img_alt_1}
                  className="sliderImg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider_img_2}
                  width={550}
                  height={420}
                  loader={myLoader_2}
                  alt={slider_img_alt_2}
                  className="sliderImg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider_img_3}
                  width={550}
                  height={420}
                  loader={myLoader_3}
                  alt={slider_img_alt_3}
                  className="sliderImg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider_img_4}
                  width={550}
                  height={420}
                  loader={myLoader_4}
                  alt={slider_img_alt_4}
                  className="sliderImg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <HotelCards className="hotelCards__id-page">
            <div className="hotelContent__information--wrapper">
              <div className="hotelContent hotelContent__id--page">
                <h3 className="hotelContent__title hotelContent__title--id-page">
                  {title}
                </h3>
                <p className="hotelContent__location">{location}</p>
                <h3 className="hotelContent__price hotelContent__price--id-page">
                  ${price}/
                  <span className="hotelContent__price--span">per night</span>
                </h3>
                <p className="body-text hotelContent__description">
                  {description}
                </p>
                <div className="hotelContent__details--wrapper hotelContent__details--wrapper">
                  <div className="hotelContent__details--container">
                    <p className="hotelContent__details hotelContent__details--id-page">
                      {balcony ? "Balcony" : ""}
                    </p>
                    <p className="hotelContent__details hotelContent__details--id-page">
                      {free_wifi ? "Free Wifi" : ""}
                    </p>
                    <p className="hotelContent__details hotelContent__details--id-page">
                      {bed_size ? "Queen Size bed" : "King Size bed"}
                    </p>
                    <p className="hotelContent__details hotelContent__details--id-page">
                      {persons ? "Two Pers" : "Four Pers"}
                    </p>
                    <p className="hotelContent__details hotelContent__details--id-page">
                      {metro ? "Metro access" : ""}
                    </p>
                  </div>
                  <div className="hotelContent__btn--wrapper">
                    <h4 className="hotelContent__cancellation">
                      Free cancellation
                    </h4>
                    <div>
                      <button
                        className="cta__sage hvr-grow hotelContent__btn"
                        onClick={() => setIsCheckout(true)}
                      >
                        Reserve room
                      </button>
                    </div>
                    {isCheckout && (
                      <Checkout
                        setIsCheckout={setIsCheckout}
                        title={title}
                        adress={adress}
                        price={price}
                        slider_img1={slider_img1}
                        slider_img_alt_1={slider_img_alt_1}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </HotelCards>
        </HotelDetailsWrapper>

        <HotelIcons>
          <div className="hotelIcons hotelIcons__id-page">
            <div className="hotelIcons__wrapper hotelIcons__wrapper--id-page">
              <Image
                src={personIcon}
                width={35}
                height={35}
                alt="Person icon"
              />
              <span className="hotelIcons__text hotelIcons__text--id-page">
                2 Pers
              </span>
            </div>
            <div className="hotelIcons__wrapper hotelIcons__wrapper--id-page">
              <Image
                src={numberReviewIcon}
                width={35}
                height={35}
                alt="Review icon"
              />
              <span className="hotelIcons__text hotelIcons__text--id-page">
                Very Good
              </span>
            </div>

            <div className="hotelIcons__wrapper hotelIcons__wrapper--id-page">
              <Image
                src={guestReviewIcon}
                width={35}
                height={35}
                alt="Guest review icon"
              />
              <span className="hotelIcons__text hotelIcons__text--id-page">
                Guest Review
              </span>
            </div>
            <div className="hotelIcons__wrapper hotelIcons__wrapper--id-page">
              <Image
                src={nonSmokingIcon}
                width={35}
                height={35}
                alt="Non smoking icon"
              />
              <span className="hotelIcons__text hotelIcons__text--id-page">
                Non-smoking
              </span>
            </div>
          </div>
        </HotelIcons>

        <div className="modal__chat">
          <div className="modal__chat--wrapper">
            {isVisible && <ChatModal setIsVisible={setIsVisible} />}
            <button
              className="cta__sage modal__chat--btn"
              onClick={() => setIsOpen(true)}
            >
              <Icon icon="carbon:dot-mark" />
              <Icon icon="carbon:dot-mark" />
            </button>
          </div>
        </div>

        {isOpen && <MessageModal setIsOpen={setIsOpen} />}

        <HotelDetail__about>
          <div className="detailAbout">
            <div className="detailAbout__text--wrapper">
              <h3>{about_title}</h3>
              <p className="body-text detailAbout__text">{about}</p>
            </div>
            <div className="detailAbout__map--wrapper">
              <Image
                src={map}
                width={550}
                height={300}
                className="detailAbout__map"
                alt="Map over hotel area"
                loader={myLoader_map}
              />
              <div className="detailAbout__map--details">
                <p className="detailAbout__adress">{adress}</p>
                <Link
                  href="https://www.google.com/maps"
                  className="detailAbout__map--text"
                >
                  View map
                </Link>
              </div>
            </div>
          </div>
        </HotelDetail__about>
        <Facilities>
          <h3>Most popular facilities</h3>
          <div className="facilities">
            <div className="facilities__wrapper">
              <div className="facilities__icon--wrapper">
                <Image
                  src={swimmingpoolIcon}
                  alt="Swimming pool icon"
                  width={40}
                  height={40}
                />
                <p className="facilities__icon--text">
                  {swimming_pool ? "Swimming Pool" : "No swimming pool"}
                </p>
              </div>
              <div className="facilities__icon--wrapper">
                <Image
                  src={nonSmokingIcon}
                  width={40}
                  height={40}
                  alt="Non smoking icon"
                />
                <p className="facilities__icon--text">
                  {nonSmoking_rooms ? "Non-smoking rooms" : "Smoking rooms"}
                </p>
              </div>
              <div className="facilities__icon--wrapper">
                <Image
                  src={fitnessIcon}
                  width={40}
                  height={40}
                  alt="Gym icon"
                />
                <p className="facilities__icon--text">
                  {gym ? "Fitness center" : "No fitness centre"}
                </p>
              </div>
            </div>

            <div className="facilities__wrapper">
              <div className="facilities__icon--wrapper">
                <Image
                  src={roomServiceIcon}
                  width={40}
                  height={40}
                  alt="Room service icon"
                />
                <p className="facilities__icon--text">
                  {room_service ? "Room service" : "No room service"}
                </p>
              </div>
              <div className="facilities__icon--wrapper">
                <Image
                  src={parkingIcon}
                  width={40}
                  height={40}
                  alt="Parking icon"
                />
                <p className="facilities__icon--text">
                  {private_parking ? "Private parking" : "No private parking"}
                </p>
              </div>
              <div className="facilities__icon--wrapper">
                <Image
                  src={restaurantIcon}
                  width={40}
                  height={40}
                  alt="Restaurant icon"
                />
                <p className="facilities__icon--text">
                  {restaurant ? "Restaurant" : "No hotel restaurant"}
                </p>
              </div>
            </div>

            <div className="facilities__wrapper">
              <div className="facilities__icon--wrapper">
                <Image
                  src={teaCoffeeIcon}
                  width={40}
                  height={40}
                  alt="Tea/coffee icon"
                />
                <p className="facilities__icon--text">
                  {teaCoffee_maker ? "Tea/coffee maker" : "No tea/coffee maker"}
                </p>
              </div>
              <div className="facilities__icon--wrapper">
                <Image src={barIcon} width={40} height={40} alt="Bar icon" />
                <p className="facilities__icon--text">
                  {bar ? "Bar" : "No hotel bar"}
                </p>
              </div>
              <div className="facilities__icon--wrapper">
                <Image
                  src={breakfastIcon}
                  width={40}
                  height={40}
                  alt="Breakfast icon"
                />
                <p className="facilities__icon--text">
                  {breakfast
                    ? "Very good breakfast"
                    : "Hotel breakfast not included"}
                </p>
              </div>
            </div>
          </div>
        </Facilities>

        <GuestReview>
          <h3>Guest reviews</h3>
          <div className="progress">
            <div className="progress__wrapper">
              <div className="progress__category">
                <p className="progress__title">Location</p>
                <div className="progress__bar--wrapper">
                  <Progress
                    className="progress__bar"
                    percent={96}
                    status="success"
                    theme={{
                      success: {
                        symbol: "‍",
                        color: "#57B15B",
                      },
                    }}
                  />
                  <span className="progress__number">9.6</span>
                </div>
              </div>
              <div className="progress__category">
                <p className="progress__title">Cleanliness</p>
                <div className="progress__bar--wrapper">
                  <Progress
                    className="progress__bar"
                    percent={89}
                    status="success"
                    theme={{
                      success: {
                        symbol: "‍",
                        color: "#57B15B",
                      },
                    }}
                  />
                  <span className="progress__number">8.9</span>
                </div>
              </div>
            </div>

            <div className="progress__wrapper">
              <div className="progress__category">
                <p className="progress__title">Comfort</p>
                <div className="progress__bar--wrapper">
                  <Progress
                    className="progress__bar"
                    percent={88}
                    status="success"
                    theme={{
                      success: {
                        symbol: "‍",
                        color: "#57B15B",
                      },
                    }}
                  />
                  <span className="progress__number">8.8</span>
                </div>
              </div>

              <div className="progress__category">
                <p className="progress__title">Facilities</p>
                <div className="progress__bar--wrapper">
                  <Progress
                    className="progress__bar"
                    percent={92}
                    status="success"
                    theme={{
                      success: {
                        symbol: "‍",
                        color: "#57B15B",
                      },
                    }}
                  />
                  <span className="progress__number">9.2</span>
                </div>
              </div>
            </div>

            <div className="progress__wrapper">
              <div className="progress__category">
                <p className="progress__title">Free Wifi</p>
                <div className="progress__bar--wrapper">
                  <Progress
                    className="progress__bar"
                    percent={98}
                    status="success"
                    theme={{
                      success: {
                        symbol: "‍",
                        color: "#57B15B",
                      },
                    }}
                  />
                  <span className="progress__number">9.8</span>
                </div>
              </div>
              <div className="progress__category">
                <p className="progress__title">Staff</p>
                <div className="progress__bar--wrapper">
                  <Progress
                    className="progress__bar"
                    percent={82}
                    status="success"
                    theme={{
                      success: {
                        symbol: "‍",
                        color: "#57B15B",
                      },
                    }}
                  />
                  <span className="progress__number">8.2</span>
                </div>
              </div>
            </div>
          </div>
        </GuestReview>
        <ProgressButton>
          <div className="cta__sage progessBtn">Add review</div>
        </ProgressButton>

        <CostumerReviewContainer />
      </main>
      <Footer />
    </div>
  );
};

export default HotelDetails;
