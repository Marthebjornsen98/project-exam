import { HeroBanner } from "../herobanner.style";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
const styles = { width: 240, display: "block" };

const options = [
  { label: "1", id: 1 },
  { label: "2", id: 2 },
  { label: "3", id: 3 },
  { label: "4", id: 4 },
  { label: "5", id: 5 },
  { label: "6", id: 6 },
];

const HeroSearch = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [guestValue, setGuestValue] = useState();
  const [roomValue, setRoomValue] = useState();

  const handleChangeGuests = (e) => {
    setGuestValue(e.target.guestValue);
  };

  const handleChangeRooms = (e) => {
    setRoomValue(e.target.roomValue);
  };

  return (
    <div>
      <HeroBanner>
        <div className="heroContent">
          <div className="heroContent__container--wrapper">
            <div className="heroContent__container">
              <div>
                <span className="heroContent__supportingText">Location</span>
                <form>
                  <input type="search" className="heroContent__input" />
                  <label className="heroContent__inputName heroContent__inputSearch">
                    Where are you going?
                  </label>
                </form>
              </div>
            </div>
            <div className="heroContent__container">
              <div>
                <span className="heroContent__supportingText">Travelers</span>
                <form>
                  <input type="text" className="heroContent__input" />
                  <select
                    value={guestValue}
                    onChange={handleChangeGuests}
                    className="heroContent__select-guests heroContent__inputName"
                  >
                    <option>Add guests</option>
                    {options.map(({ id, label }) => {
                      return (
                        <option key={id} value={guestValue}>
                          {label}
                        </option>
                      );
                    })}
                  </select>
                </form>
              </div>
            </div>

            <div className="heroContent__container">
              <div>
                <span className="heroContent__supportingText">Add date</span>
                <form>
                  {isShowing ? (
                    <DateRangePicker
                      size="md"
                      placeholder="Select date"
                      style={styles}
                    />
                  ) : (
                    <label
                      className="heroContent__inputName"
                      onClick={() => setIsShowing(true)}
                    >
                      Check in/out
                    </label>
                  )}
                </form>
              </div>
            </div>

            <div className="heroContent__container">
              <div>
                <span className="heroContent__supportingText">Rooms</span>
                <form>
                  <input type="text" className="heroContent__input" />
                  <select
                    value={roomValue}
                    onChange={handleChangeRooms}
                    className="heroContent__select-guests heroContent__inputName"
                  >
                    <option>Add rooms</option>
                    {options.map(({ id, label }) => {
                      return (
                        <option key={id} value={roomValue}>
                          {label}
                        </option>
                      );
                    })}
                  </select>
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

export default HeroSearch;
