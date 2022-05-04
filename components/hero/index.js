import Header from "../header/index";
import { HeroBanner } from "./herobanner.style";
import { Icon } from "@iconify/react";
import Image from "next/image";
import hotelIcon from "../../public/assets/hotel.svg";
import planeIcon from "../../public/assets/plane.svg";

const Hero = () => {
  return (
    <div className="heroImg">
      <HeroBanner>
        <Header />

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

          <div className="heroContent__container--wrapper">
            <div className="heroContent__container">
              {/* <div className="heroContent__icon--wrapper">
                <Icon icon="eva:pin-outline" className="icon" />
              </div> */}
              <div>
                <span className="heroContent__supportingText">Location</span>
                <form>
                  <input type="text" className="heroContent__input" />
                  <label className="heroContent__inputName">
                    Where are you going?
                  </label>
                </form>
              </div>
            </div>

            <div className="heroContent__container">
              {/* <div className="heroContent__icon--wrapper">
                <Icon icon="bi:person" className="icon" />
              </div> */}
              <div>
                <span className="heroContent__supportingText">Location</span>
                <form>
                  <input type="text" className="heroContent__input" />
                  <label className="heroContent__inputName">Add guests</label>
                </form>
              </div>
            </div>

            <div className="heroContent__container">
              {/* <div className="heroContent__icon--wrapper">
                <Icon icon="uil:calender" className="icon" />
              </div> */}
              <div>
                <span className="heroContent__supportingText">Location</span>
                <form>
                  <input type="text" className="heroContent__input" />
                  <label className="heroContent__inputName">Check in/out</label>
                </form>
              </div>
            </div>

            <div className="heroContent__container">
              {/* <div className="heroContent__icon--wrapper">
                <Icon icon="icon-park-outline:single-bed" className="icon" />
              </div> */}
              <div>
                <span className="heroContent__supportingText">Location</span>
                <form>
                  <input type="text" className="heroContent__input" />
                  <label className="heroContent__inputName">Add rooms</label>
                </form>
              </div>
            </div>
            <button className="heroContent__search--button">
              <Icon icon="charm:search" className="heroContent__search--icon" />
            </button>
          </div>
        </div>
      </HeroBanner>
    </div>
  );
};

export default Hero;
