import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

// Components
import Header from "../components/header";
import HeroSearch from "../components/hero/heroSerach";
import HotelCard from "../components/hotelCards";
import Footer from "../components/footer";

// Filters
import Filter from "../components/filter";
import { ResponsiveFilter } from "../components/filter/responsiveFilter/responsiveFilter.js";
import FilterIcon from "../public/icons/filter_icon.svg";
import FilterModal from "../components/Modals/FilterModal.js";

import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Hotels from "../../../pages/hotels";

// Styles
import { HeroSearchWrapper } from "./heroSearch.style";

// Datepicker
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
const styles = { width: 240, display: "block" };

const options = [
  { label: "1", id: 1 },
  { label: "2", id: 2 },
  { label: "3", id: 3 },
  { label: "4", id: 4 },
  { label: "5", id: 5 },
  { label: "6", id: 6 },
];

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:1337/holidazes");
  const data = await res.json();

  return {
    props: { hotels: data },
  };
};

const Hotels = ({ hotels }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [isInputShowing, setIsInputShowing] = useState(false);
  const [guestValue, setGuestValue] = useState();
  const [roomValue, setRoomValue] = useState();
  const [searchText, setSearchText] = useState("");

  const handleChangeGuests = (e) => {
    setGuestValue(e.target.guestValue);
  };

  const handleChangeRooms = (api) => {
    setRoomValue(api.target.roomValue);
  };

  const [openFilter, setOpenFilter] = useState(false);
  const [width, setWidth] = useState(global.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(global.innerWidth);
    global.addEventListener("resize", handleWindowResize);

    return () => global.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <title>Hotels</title>
        <meta
          name="description"
          content="Welcome to Holidaze! Here you can browse through all of our hotels, we hope you find the perfect hotel for you!"
        />
      </Head>
      <Header />
      <main>
        <HeroSearchWrapper>
          <div className="heroSearch">
            <div className="heroSearch__container">
              <span className="heroSearch__supportinghotel">Location</span>
              <form onSubmit={submitAction}>
                {isInputShowing ? (
                  <input
                    onChange={(e) => {
                      setSearchText(e.target.value);
                    }}
                  />
                ) : (
                  <label
                    className="heroSearch__inputName"
                    onClick={() => setIsInputShowing(true)}
                  >
                    Where are you going?
                  </label>
                )}
              </form>
            </div>

            <div className="heroSearch__container">
              <span className="heroSearch__supportinghotel">Travelers</span>
              <form>
                <select
                  value={guestValue}
                  onChange={handleChangeGuests}
                  className="heroSearch__inputName"
                >
                  <option>Add guests</option>
                  {options.map(({ id, label }) => {
                    return (
                      <option key={id} value={guestValue}>
                        {label}
                      </option>
                    );
                  })}
                </select>
              </form>
            </div>

            <div className="heroSearch__container">
              <span className="heroSearch__supportinghotel">Add date</span>
              <form>
                {isShowing ? (
                  <DateRangePicker
                    size="md"
                    placeholder="Select date"
                    style={styles}
                  />
                ) : (
                  <label
                    className="heroSearch__inputName"
                    onClick={() => setIsShowing(true)}
                  >
                    Check in/out
                  </label>
                )}
              </form>
            </div>

            <div className="heroSearch__container">
              <span className="heroSearch__supportinghotel">Rooms</span>
              <form>
                <select
                  value={roomValue}
                  onChange={handleChangeRooms}
                  className="heroSearch__inputName"
                >
                  <option>Add rooms</option>
                  {options.map(({ id, label }) => {
                    return (
                      <option key={id} value={roomValue}>
                        {label}
                      </option>
                    );
                  })}
                </select>
              </form>
            </div>

            <button className="heroSearch__button" type="submit">
              <Icon icon="charm:search" className="heroSearch__button--icon" />
            </button>
          </div>
        </HeroSearchWrapper>

        <div className="hotel__wrapper">
          <ResponsiveFilter>
            {width < breakpoint ? (
              <div
                onClick={() => setOpenFilter(true)}
                className="responsive__modal"
              >
                <Image
                  src={FilterIcon}
                  width={24}
                  heigh={23}
                  className="hotel__filterIcon"
                />
              </div>
            ) : (
              <Filter className="responsive__filter" />
            )}

            {openFilter && <FilterModal setOpenFilter={setOpenFilter} />}
          </ResponsiveFilter>

          <div className="hotelCard__wrapper">
            {hotels
              .filter((value) => {
                if (searchText == "") {
                  return value;
                } else if (
                  value.title.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return value;
                }
              })
              .hotels.map(
                ({
                  id,
                  title,
                  location,
                  price,
                  description,
                  details,
                  hotels_image,
                  stars,
                }) => {
                  return (
                    <HotelCard
                      key={id}
                      id={id}
                      title={title}
                      location={location}
                      price={price}
                      description={description}
                      details={details}
                      hotels_image={hotels_image}
                      stars={stars}
                    />
                  );
                }
              )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Hotels;
