import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import nookies from "nookies";
import LoginComponent from "../components/loginComponent";

// Images
import logo from "../public/assets/holidaze-logo.svg";
import hikingImg from "../public/assets/login_img.jpg";

// Styles
import { LoginStyle, LoginLogo } from "../styles/login.style";

const loginPage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>Log in</title>
        <meta
          name="description"
          content="Welcome to Holidaze! Here you can log in and book the hotels you would like. We hope you find the hotel room you are looking for. Dont hesitate to contact us if you have any questions."
        />
      </Head>

      <LoginStyle>
        <div className="login">
          <div className="login__form--side">
            <LoginLogo>
              <Link href="/" passHref>
                <a>
                  <Image
                    src={logo}
                    width={138}
                    height={43}
                    alt="Holidaze logo in green"
                  />
                </a>
              </Link>
            </LoginLogo>
            <div className="login__form--wrapper">
              <h1 className="login__title">Log in</h1>
              <p className="login__text">
                Welcome, create a user to save and book your favorite hotels!
              </p>
              <LoginComponent />
            </div>
          </div>

          <div className="login__img--side">
            <Image
              src={hikingImg}
              className="login__img"
              alt="Person hiking with mountains and water around."
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </LoginStyle>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  let user = null;

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get("http://localhost:1337/users/me", {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
      });
      user = data;
    } catch (e) {
      console.log(e);
    }
  }

  if (user) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
};

export default loginPage;
