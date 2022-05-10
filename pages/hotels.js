import Head from "next/head";
import HeroSearch from "../components/hero/heroSerach";
import HotelCard from "../components/hotelCards";
import Header from "../components/header";
import Filter from "../components/filter";
import Footer from "../components/footer";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:1337/holidazes");
  const data = await res.json();

  return {
    props: { hotels: data },
  };
};

const Hotels = ({ hotels }) => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <title>Holidaze</title>
        <meta name="description" content="Welcome to Holidaze!" />
      </Head>
      <Header />
      <main>
        <HeroSearch />
        <div className="hotel__wrapper">
          <Filter />
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
