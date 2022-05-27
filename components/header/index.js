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

  const goToLogin = () => {
    Router.push("/loginPage");
  };

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      Router.reload();
      Router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (cookies) setLoggedIn(true);
  }, [cookies]);

  return (
    <>
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
          {loggedIn ? (
            <Link href="/admin" passHref>
              <a
                className={Router.pathname === "/admin" ? "active" : "inactive"}
              >
                Admin
              </a>
            </Link>
          ) : (
            ""
          )}
        </ul>

        {loggedIn ? (
          <button className="cta__grass hvr-grow login__btn" onClick={logout}>
            Log out
          </button>
        ) : (
          <Link href="/loginPage" passHref>
            <a>
              <button
                className="cta__grass hvr-grow login__btn"
                onClick={goToLogin}
              >
                Log in
              </button>
            </a>
          </Link>
        )}
        <div className="bottomNavigation">
          <ul className="nav bottomNavigation__navbar">
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
            {loggedIn ? (
              <Link href="/admin" passHref>
                <a
                  className={
                    Router.pathname === "/admin" ? "active" : "inactive"
                  }
                >
                  Admin
                </a>
              </Link>
            ) : (
              ""
            )}
          </ul>
        </div>
      </Nav>
    </>
  );
};

export default Header;
