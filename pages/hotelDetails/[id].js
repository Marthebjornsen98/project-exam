import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header";

// Hotel img and description
import { HotelCards } from "../../components/hotelCards/hotelCards.style";
import { HotelDetailsWrapper } from "./id.style";

//hotel detail icons
import personIcon from "../../public/assets/person_icon.svg";
import numberReviewIcon from "../../public/assets/number_review_icon.svg";
import guestReviewIcon from "../../public/assets/guest_review_icon.svg";
import nonSmokingIcon from "../../public/assets/nonSmoking_icon.svg";

//hotel facility icons
import barIcon from "../../public/assets/bar_icon.svg";
import breakfastIcon from "../../public/assets/breakfast_icon.svg";
import teaCoffeeIcon from "../../public/assets/coffee_icon.svg";
import fitnessIcon from "../../public/assets/fitness_icon.svg";
import parkingIcon from "../../public/assets/parking_icon.svg";
import restaurantIcon from "../../public/assets/restaurant_icon.svg";
import roomServiceIcon from "../../public/assets/roomService_icon.svg";
import swimmingpoolIcon from "../../public/assets/swimmingpool_icon.svg";

//about section
import {
  HotelDetail__about,
  Facilities,
  GuestReview,
  ProgressButton,
} from "./id.style";

import CostumerReviewContainer from "../../components/costumerReview";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// Progress bar
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

// Footer
import Footer from "../../components/footer";

export const getStaticPaths = async () => {
  const res = await fetch("http:localhost:1337/holidazes");
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
  const res = await fetch("http:localhost:1337/holidazes/" + id);
  const data = await res.json();

  return {
    props: { hotelDetail: data },
  };
};

const HotelDetails = ({
  hotelDetail: {
    id,
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
    customer_review,
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

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <meta
          name="description"
          content={`Welcome to Holidaze! This is ${title}, we hope you find the room you are looking for. Dont hesitate to contact us if you have any questions.`}
        />
        <title>{title}</title>
      </Head>
      <Header id={id} />

      <main>
        <HotelDetailsWrapper>
          <div>
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src={slider_img1}
                  width={610}
                  height={420}
                  loader={myLoader_1}
                  alt={slider_img_alt_1}
                  className="sliderImg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider_img_2}
                  width={610}
                  height={420}
                  loader={myLoader_2}
                  alt={slider_img_alt_2}
                  className="sliderImg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider_img_3}
                  width={610}
                  height={420}
                  loader={myLoader_3}
                  alt={slider_img_alt_3}
                  className="sliderImg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider_img_4}
                  width={610}
                  height={420}
                  loader={myLoader_4}
                  alt={slider_img_alt_4}
                  className="sliderImg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <HotelCards>
            <div className="hotelContent__details--id-page">
              <div className="hotelContent hotelContent__id--page">
                <h3 className="hotelContent__title hotelContent__title--id-page">
                  {title}
                </h3>
                <p className="hotelContent__location">{location}</p>
                <h3 className="hotelContent__price">
                  ${price}/
                  <span className="hotelContent__price--span">per night</span>
                </h3>
                <p className="body-text hotelContent__description">
                  {description}
                </p>
                <div className="hotelContent__details--wrapper details__id--page">
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
                    <h4 className="hotelContent__cancellation">
                      Free cancellation
                    </h4>
                    <div href={"/hotelDetails/" + id}>
                      <a className="cta__sage hvr-grow">Reserve room</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hotelIcons">
                <div className="hotelIcons__wrapper">
                  <Image src={personIcon} width={35} height={35} />
                  <span className="hotelIcons__text">2 Pers</span>
                </div>
                <div className="hotelIcons__wrapper">
                  <Image src={numberReviewIcon} width={35} height={35} />
                  <span className="hotelIcons__text">Very Good</span>
                </div>
                <div className="hotelIcons__wrapper">
                  <Image src={guestReviewIcon} width={35} height={35} />
                  <span className="hotelIcons__text">Guest Review</span>
                </div>
                <div className="hotelIcons__wrapper">
                  <Image src={nonSmokingIcon} width={35} height={35} />
                  <span className="hotelIcons__text">Non-smoking</span>
                </div>
              </div>
            </div>
          </HotelCards>
        </HotelDetailsWrapper>

        <HotelDetail__about>
          <div className="detailAbout">
            <div className="detailAbout__title">
              <h3>{about_title}</h3>
              <p className="body-text detailAbout__text">{about}</p>
            </div>
            <div>
              <Image
                src={map}
                width={600}
                height={300}
                alt="Map over Oslo"
                loader={myLoader_map}
              />
              <div className="detailAbout__map--details">
                <p className="detailAbout__adress">{adress}</p>
                <a href="#" className="detailAbout__map--text">
                  View map
                </a>
              </div>
            </div>
          </div>
        </HotelDetail__about>

        <Facilities>
          <h3>Most popular facilities</h3>
          <div className="facilities">
            <div className="facilities__wrapper">
              <div className="facilities__icon--wrapper">
                <Image src={swimmingpoolIcon} width={40} height={40} />
                <p className="facilities__icon--text">
                  {swimming_pool ? "Swimming Pool" : "No swimming pool"}
                </p>
              </div>
              <div className="facilities__icon--wrapper">
                <Image src={nonSmokingIcon} width={40} height={40} />
                <p className="facilities__icon--text">
                  {nonSmoking_rooms ? "Non-smoking rooms" : "Smoking rooms"}
                </p>
              </div>
              <div className="facilities__icon--wrapper">
                <Image src={fitnessIcon} width={40} height={40} />
                <p className="facilities__icon--text">
                  {gym ? "Fitness center" : "No fitness centre"}
                </p>
              </div>
            </div>

            <div className="facilities__wrapper">
              <div className="facilities__icon--wrapper">
                <Image src={roomServiceIcon} width={40} height={40} />
                <p className="facilities__icon--text">
                  {room_service ? "Room service" : "No room service"}
                </p>
              </div>
              <div className="facilities__icon--wrapper">
                <Image src={parkingIcon} width={40} height={40} />
                <p className="facilities__icon--text">
                  {private_parking ? "Private parking" : "No private parking"}
                </p>
              </div>
              <div className="facilities__icon--wrapper">
                <Image src={restaurantIcon} width={40} height={40} />
                <p className="facilities__icon--text">
                  {restaurant ? "Restaurant" : "No hotel restaurant"}
                </p>
              </div>
            </div>

            <div className="facilities__wrapper">
              <div className="facilities__icon--wrapper">
                <Image src={teaCoffeeIcon} width={40} height={40} />
                <p className="facilities__icon--text">
                  {teaCoffee_maker ? "Tea/coffee maker" : "No tea/coffee maker"}
                </p>
              </div>
              <div className="facilities__icon--wrapper">
                <Image src={barIcon} width={40} height={40} />
                <p className="facilities__icon--text">
                  {bar ? "Bar" : "No hotel bar"}
                </p>
              </div>
              <div className="facilities__icon--wrapper">
                <Image src={breakfastIcon} width={40} height={40} />
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
