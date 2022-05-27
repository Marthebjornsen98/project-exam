import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

// Styles
import { Nav } from "./header.style";
import Logo from "../../public/assets/holidaze-logo.svg";

const Header = () => {
  const cookies = parseCookies().jwt;
  const Router = useRouter();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (cookies) setLoggedIn(true);
  }, [cookies]);

  const goToLogin = () => {
    Router.push("/loginPage");
  };

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      Router.push("/");
      console.log("im clicking");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {loggedIn ? (
        <Nav>
          <Link href="/" passHref>
            <a>
              <Image
                src={Logo}
                className="logo"
                width={130}
                height={40}
                alt="Holidaze green logo"
              />
            </a>
          </Link>

          <ul className="nav topNavigation">
            <li className="nav__link">
              <Link
                href="/"
                className={Router.pathname === "/" ? "active" : "inactive"}
              >
                <a>Home</a>
              </Link>
            </li>

            <li className="nav__link">
              <Link
                href="/hotels"
                className={
                  Router.pathname === "/hotels" ? "active" : "inactive"
                }
              >
                <a>Hotels</a>
              </Link>
            </li>

            <li className="nav__link">
              <Link
                href="/contact"
                className={
                  Router.pathname === "/contact" ? "active" : "inactive"
                }
              >
                <a>Contact</a>
              </Link>
            </li>

            <li className="nav__link">
              <Link
                href="/admin"
                className={
                  Router.pathname === "/hotels" ? "active" : "inactive"
                }
              >
                <a>Admin</a>
              </Link>
            </li>
          </ul>
          <Link href="/">
            <button className="cta__grass hvr-grow login__btn" onClick={logout}>
              Log out
            </button>
          </Link>

          <div className="bottomNavigation">
            <ul className="nav bottomNavigation__navbar">
              <li className="nav__link">
                <Link href="/" passHref>
                  <a
                    className={Router.pathname === "/" ? "active" : "inactive"}
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li className="nav__link">
                <Link href="/hotels" passHref>
                  <a
                    className={
                      Router.pathname === "/hotels" ? "active" : "inactive"
                    }
                  >
                    Hotels
                  </a>
                </Link>
              </li>

              <li className="nav__link">
                <Link href="/contact" passHref>
                  <a
                    className={
                      Router.pathname === "/contact" ? "active" : "inactive"
                    }
                  >
                    Contact
                  </a>
                </Link>
              </li>

              <li className="nav__link">
                <Link href="/admin" passHref>
                  <a
                    className={
                      Router.pathname === "/hotels" ? "active" : "inactive"
                    }
                  >
                    Admin
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </Nav>
      ) : (
        <Nav>
          <Link href="/" passHref>
            <a>
              <Image
                src={Logo}
                className="logo"
                width={130}
                height={40}
                alt="Holidaze green logo"
              />
            </a>
          </Link>

          <ul className="nav topNavigation">
            <li className="nav__link">
              <Link href="/" passHref>
                <a className={Router.pathname === "/" ? "active" : "inactive"}>
                  Home
                </a>
              </Link>
            </li>

            <li className="nav__link">
              <Link href="/hotels" passHref>
                <a
                  className={
                    Router.pathname === "/hotels" ? "active" : "inactive"
                  }
                >
                  Hotels
                </a>
              </Link>
            </li>

            <li className="nav__link">
              <Link href="/contact" passHref>
                <a
                  className={
                    Router.pathname === "/contact" ? "active" : "inactive"
                  }
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <Link href="/loginPage">
            <button
              className="cta__grass hvr-grow login__btn"
              onClick={goToLogin}
            >
              Log in
            </button>
          </Link>

          <div className="bottomNavigation">
            <ul className="nav bottomNavigation__navbar">
              <li className="nav__link">
                <Link href="/" passHref>
                  <a
                    className={Router.pathname === "/" ? "active" : "inactive"}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav__link">
                <Link href="/hotels" passHref>
                  <a
                    className={
                      Router.pathname === "/hotels" ? "active" : "inactive"
                    }
                  >
                    Hotels
                  </a>
                </Link>
              </li>
              <li className="nav__link">
                <Link href="/contact" passHref>
                  <a
                    className={
                      Router.pathname === "/contact" ? "active" : "inactive"
                    }
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </Nav>
      )}
    </>
  );
};

export default Header;
