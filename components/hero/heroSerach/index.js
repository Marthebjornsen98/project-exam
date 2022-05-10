import { HeroBanner } from "../herobanner.style";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Select from "react-dropdown-select";

const areas = [
  { id: 1, value: "Oslo", label: "Oslo" },
  { id: 2, value: "Trondheim", label: "Trondheim" },
  { id: 3, value: "Stavanger", label: "Stavanger" },
  { id: 4, value: "Bergen", label: "Bergen" },
  { id: 5, value: "Bodø", label: "Bodø" },
];

const HeroSearch = () => {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:1337/holidazes/");
      const data = await res.json();
      setHotel(data);
    })();
  }, []);

  const [toggle, setToggle] = useState(false);

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
                  <label
                    className="heroContent__inputName heroContent__inputSearch"
                    onClick={() => setToggle(!toggle)}
                  >
                    {toggle ? (
                      <Select
                        {...areas.map(({ id, value, label }) => {
                          return {
                            id: id,
                            value: value,
                            label: label,
                          };
                        })}
                        onChange={(values) => setHotel([...values])}
                        keepSelectedInList={false}
                        className="heroContent__search--input"
                        placeholder="Select location"
                      />
                    ) : (
                      `Where are you going?`
                    )}
                  </label>
                </form>
              </div>
            </div>
            <div className="heroContent__container">
              <div>
                <span className="heroContent__supportingText">Travelers</span>
                <form>
                  <input type="text" className="heroContent__input" />
                  <label className="heroContent__inputName">Add guests</label>
                </form>
              </div>
            </div>

            <div className="heroContent__container">
              <div>
                <span className="heroContent__supportingText">Add date</span>
                <form>
                  <input type="text" className="heroContent__input" />
                  <label className="heroContent__inputName">Check in/out</label>
                </form>
              </div>
            </div>

            <div className="heroContent__container">
              <div>
                <span className="heroContent__supportingText">Rooms</span>
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

export default HeroSearch;
