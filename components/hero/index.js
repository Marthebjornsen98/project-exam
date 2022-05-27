// Components
import Header from "../header/index";
import HeroSearch from "./heroSerach";

// Styles
import { HeroImg } from "./heroImg/heroImg.style";
import { HeroBanner } from "./herobanner.style";

const Hero = () => {
  return (
    <HeroImg>
      <HeroBanner>
        <Header />
        {/* <HeroSearch /> */}
      </HeroBanner>
    </HeroImg>
  );
};

export default Hero;
