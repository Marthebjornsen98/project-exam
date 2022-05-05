import Head from "next/head";

// Components
import Footer from "../components/footer";

export default function logIn() {
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
      <main></main>
      <Footer />
    </div>
  );
}
