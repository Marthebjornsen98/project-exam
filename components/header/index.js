import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Styles
import { Nav } from "./header.style";

// Logo
import Logo from "../../public/assets/holidaze-logo.svg";

const Header = () => {
  const Router = useRouter();

  const goToLogin = () => {
    Router.push("/loginPage");
  };

  return (
    <Nav>
      <a href="/">
        <Image src={Logo} width={138} height={43} />
      </a>

      <ul className="nav">
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
              className={Router.pathname === "/hotels" ? "active" : "inactive"}
            >
              Hotels
            </a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/contact">
            <a
              className={Router.pathname === "/contact" ? "active" : "inactive"}
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
      <li>
        <Link href="/loginPage">
          <button className="cta__grass hvr-grow" onClick={goToLogin}>
            Log in
          </button>
        </Link>
      </li>
    </Nav>
  );
};

export default Header;
