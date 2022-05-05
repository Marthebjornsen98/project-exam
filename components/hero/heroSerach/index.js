import { HeroBanner } from "../herobanner.style";
import { Icon } from "@iconify/react";

const HeroSearch = () => {
  return (
    <HeroBanner>
      <div className="heroContent">
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
  );
};

export default HeroSearch;
