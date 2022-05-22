import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "../components/header";
import HeroSearch from "../components/hero/heroSerach";
import HotelCard from "../components/hotelCards";
import Footer from "../components/footer";

// Filters
import Filter from "../components/filter";
import { ResponsiveFilter } from "../components/filter/responsiveFilter/responsiveFilter.js";
import FilterIcon from "../public/icons/filter_icon.svg";
import FilterModal from "../components/Modals/FilterModal.js";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:1337/holidazes");
  const data = await res.json();

  return {
    props: { hotels: data },
  };
};

const Hotels = ({ hotels }) => {
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
      <Header hotelSearch={hotels} />
      <main>
        {/* <HeroSearch /> */}
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
            {hotels.map(
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
