import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { BaseUrl } from "../libs/baseUrl.js";

// Components
import Header from "../components/header";
import HotelCard from "../components/hotelCards";
import Footer from "../components/footer";

// Filters
import Filter from "../components/filter";
import { ResponsiveFilter } from "../components/filter/responsiveFilter/responsiveFilter";
import FilterIcon from "../public/icons/filter_icon.svg";
import FilterModal from "../components/Modals/FilterModal.js";

// Styles
import { HeroSearchWrapper } from "../components/hero/heroSerach/heroSearch.style.js";

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
  const res = await fetch(`${BaseUrl}holidazes`);
  const data = await res.json();

  return {
    props: { hotels: data },
  };
};

const Hotels = ({ hotels }) => {
  // New api call
  const [fetchHotels, setFetchHotels] = useState(hotels);

  // Search bar
  const [isShowing, setIsShowing] = useState(false);
  const [isInputShowing, setIsInputShowing] = useState(false);
  const [guestValue, setGuestValue] = useState();
  const [roomValue, setRoomValue] = useState();
  const [location, setLocation] = useState([]);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  // Filter
  const [openFilter, setOpenFilter] = useState(false);
  const [width, setWidth] = useState(global.innerWidth);

  const handleOnSearch = (event) => {
    event.preventDefault();
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const uniqueArray = (event) => {
    let newArray = [];

    for (let i = 0; i < event.length; i++) {
      if (newArray.indexOf(event[i].area) === -1) {
        newArray.push(event[i].area);
      }
    }
    return newArray;
  };

  const filterHotels = () => {
    return fetchHotels.filter(
      (hotel) =>
        hotel.area.toLowerCase().indexOf(query.toLocaleLowerCase()) > -1
    );
  };

  useEffect(() => {
    async function getData() {
      const res = await fetch(`${BaseUrl}holidazes/`);
      const data = await res.json();
      setFetchHotels(data);
    }

    getData();
  }, []);

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>Hotels</title>
        <meta
          name="description"
          content="Welcome to Holidaze! Here you can browse through all of our hotels, we hope you find the perfect hotel for you!"
        />
      </Head>
      <Header />
      <main>
        <HeroSearchWrapper>
          <form onSubmit={(event) => handleOnSearch(event)}>
            <div className="heroSearch">
              <div className="heroSearch__container">
                <span className="heroSearch__supportinghotel">Location</span>
                <div className="heroSearch__input--wrapper">
                  {isInputShowing ? (
                    <>
                      <input
                        className="heroSearch__input"
                        value={query}
                        onClick={() => setOpen(true)}
                        onChange={(event) => handleSearch(event)}
                      />
                      <ul
                        className={
                          open ? "heroSearch__search--result" : "hidden"
                        }
                      >
                        {uniqueArray(filterHotels()).map((elm) => {
                          return (
                            <li
                              key={elm}
                              value={elm}
                              onClick={() => {
                                setQuery(elm), setOpen(false);
                              }}
                              className="heroSearch__search--text"
                            >
                              {elm}
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <label
                      className="heroSearch__inputName"
                      onClick={() => setIsInputShowing(true)}
                    >
                      Where are you going?
                    </label>
                  )}
                </div>
              </div>

              <div className="heroSearch__container">
                <span className="heroSearch__supportinghotel">Add date</span>
                <div>
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
                </div>
              </div>

              <div className="heroSearch__container">
                <span className="heroSearch__supportinghotel">Travelers</span>
                <div>
                  <select
                    value={guestValue}
                    onChange={() => setGuestValue(guestValue)}
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
                </div>
              </div>

              <div className="heroSearch__container">
                <span className="heroSearch__supportinghotel">Rooms</span>
                <div>
                  <select
                    value={roomValue}
                    onChange={() => setRoomValue(roomValue)}
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
                </div>
              </div>

              <button className="heroSearch__button" type="submit">
                <Icon
                  icon="charm:search"
                  className="heroSearch__button--icon"
                />
              </button>
            </div>
          </form>
        </HeroSearchWrapper>

        <div className="hotel__wrapper">
          <ResponsiveFilter>
            <div
              onClick={() => setOpenFilter(true)}
              className="responsive__modal"
            >
              <Image
                src={FilterIcon}
                width={24}
                heigh={23}
                alt="Filter icon"
                className="hotel__filterIcon"
              />
            </div>

            <Filter />
          </ResponsiveFilter>

          {openFilter && <FilterModal setOpenFilter={setOpenFilter} />}

          <div className="hotelCard__wrapper">
            {filterHotels().map(
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
