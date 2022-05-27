// Components
import Header from "../header/index";

// Styles
import { HeroImg } from "./heroImg/heroImg.style";
import { HeroBanner } from "./herobanner.style";

const Hero = () => {
  return (
    <HeroImg>
      <HeroBanner>
        <Header />
      </HeroBanner>
    </HeroImg>
  );
};

export default Hero;
