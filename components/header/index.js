import Image from "next/image";
import Logo from "../../public/assets/holidaze-logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { Nav } from "./header.style";

const Header = ({ id }) => {
  const Router = useRouter();
  // if (id) {
  //   const newId = id.toString();
  //   const ifActive = () => {
  //     if (Router.pathname === "/hotels") {
  //       return "active";
  //     } else if (Router.pathname === "/hotelDetails/" + newId) {
  //       return "active";
  //     } else {
  //       return "inactive";
  //     }
  //   };
  // }

  return (
    <Nav>
      <a href="/">
        <Image src={Logo} width={"138px"} height={"43px"} />
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
      <button
        className={
          Router.pathname === "/logIn"
            ? "cta__grass hvr-grow"
            : "cta__grass hvr-grow"
        }
      >
        Log in
      </button>
    </Nav>
  );
};

export default Header;
