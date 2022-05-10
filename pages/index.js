import Head from "next/head";

// Components
import Hero from "../components/hero";
import Footer from "../components/footer";
import Recomandations from "../components/recomendations";
import Collage from "../components/imgCollage";
import CostumerReviewContainer from "../components/costumerReview";
import SignUp from "../components/signUp";
import { useState, useEffect } from "react";

export default function Home() {
  // const [hotel, setHotel] = useState([]);

  // useEffect(() => {
  //   async () => {
  //     const res = await fetch("http://localhost:1337/holidazes/");
  //     const data = await res.json();
  //     setHotel(data);
  //   };
  // });

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <title>Holidaze</title>
        <meta
          name="description"
          content="Welcome to Holidaze! We hope you find the hotel room you are looking for. Dont hesitate to contact us if you have any questions."
        />
      </Head>
      <Hero />
      <main>
        <Recomandations />
        <Collage />
        <CostumerReviewContainer />
        <SignUp />
      </main>
      <Footer />
    </div>
  );
}
