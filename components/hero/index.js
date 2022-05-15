import Header from "../header/index";
import Image from "next/image";

// Components
import HeroSearch from "./heroSerach";

// Icons
import hotelIcon from "../../public/assets/hotel.svg";
import planeIcon from "../../public/assets/plane.svg";

// Styles
import { HeroImg } from "./heroImg.style";
import { HeroBanner } from "./herobanner.style";

const Hero = () => {
  return (
    <HeroImg>
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
    </HeroImg>
  );
};

export default Hero;
