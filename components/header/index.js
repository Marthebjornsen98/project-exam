import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

// Styles
import { Nav } from "./header.style";
import Logo from "../../public/assets/holidaze-logo.svg";

const Header = () => {
  const cookies = parseCookies().jwt;
  const Router = useRouter();

  const goToLogin = () => {
    Router.push("/loginPage");
  };

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      Router.push("/index");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {cookies ? (
        <Nav>
          <a href="/">
            <Image
              src={Logo}
              className="logo"
              width={130}
              height={40}
              alt="Holidaze green logo"
            />
          </a>

          <ul className="nav topNavigation">
            <li className="nav__link">
              <Link href="/">
                <a className={Router.pathname === "/" ? "active" : "inactive"}>
                  Home
                </a>
              </Link>
            </li>

            <li className="nav__link">
              <Link href="/hotels">
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
              <Link href="/contact">
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
              <Link href="/admin">
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
          <a href="/">
            <button className="cta__grass hvr-grow login__btn" onClick={logout}>
              Log out
            </button>
          </a>

          <div className="bottomNavigation">
            <ul className="nav bottomNavigation__navbar">
              <li className="nav__link">
                <Link href="/">
                  <a
                    className={Router.pathname === "/" ? "active" : "inactive"}
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li className="nav__link">
                <Link href="/hotels">
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
                <Link href="/contact">
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
                <Link href="/admin">
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
          <a href="/">
            <Image
              src={Logo}
              className="logo"
              width={130}
              height={40}
              alt="Holidaze green logo"
            />
          </a>

          <ul className="nav topNavigation">
            <li className="nav__link">
              <Link href="/">
                <a className={Router.pathname === "/" ? "active" : "inactive"}>
                  Home
                </a>
              </Link>
            </li>

            <li className="nav__link">
              <Link href="/hotels">
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
              <Link href="/contact">
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
          <a href="/loginPage">
            <button
              className="cta__grass hvr-grow login__btn"
              onClick={goToLogin}
            >
              Log in
            </button>
          </a>

          <div className="bottomNavigation">
            <ul className="nav bottomNavigation__navbar">
              <li className="nav__link">
                <Link href="/">
                  <a
                    className={Router.pathname === "/" ? "active" : "inactive"}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav__link">
                <Link href="/hotels">
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
                <Link href="/contact">
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
