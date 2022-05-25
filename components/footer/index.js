import { FooterContainer } from "./footer.style";
import Logo from "../../public/assets/holidaze-logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer">
        <div className="footer__top--wrapper">
          <Image src={Logo} width={138} height={43} alt="Holidaze logo" />
          <ul className="footer__links--wrapper">
            <Link href="#" passHref>
              <li className="footer__links">Review</li>
            </Link>
            <Link href="#" passHref>
              <li className="footer__links">Tips</li>
            </Link>
            <Link href="#" passHref>
              <li className="footer__links">Blog</li>
            </Link>
            <Link href="#" passHref>
              <li className="footer__links">Q&A</li>
            </Link>
          </ul>
        </div>
        <div className="footer__bottom--wrapper">
          <p className="footer__rights">
            © Holidaze 2022 All rights reserved. For educational use only.
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
