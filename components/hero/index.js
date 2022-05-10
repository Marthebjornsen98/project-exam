import Header from "../header/index";
import { HeroBanner } from "./herobanner.style";
import Image from "next/image";
import hotelIcon from "../../public/assets/hotel.svg";
import planeIcon from "../../public/assets/plane.svg";
import HeroSearch from "./heroSerach";

const Hero = (props) => {
  return (
    <div className="heroImg">
      <HeroBanner>
        <Header />
        <div>
          <div className="heroContent">
            <div className="heroContent__select">
              <div className="heroContent__select--btn">
                <Image src={hotelIcon} width={18} height={18} />
                <span className="heroContent__hotel">Hotel</span>
              </div>
              <div className="heroContent__select--btn heroContent__right--btn">
                <Image src={planeIcon} width={18} height={18} />
                <span className="heroContent__hotel">Flight</span>
              </div>
            </div>
          </div>
          <HeroSearch />
        </div>
      </HeroBanner>
    </div>
  );
};

export default Hero;
