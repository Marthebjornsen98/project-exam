import { FilterWrapper } from "./filter.style";
import { useState } from "react";
import RangeBar from "./rangeBar";
import { Icon } from "@iconify/react";

const Filter = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <FilterWrapper>
      <div className="filter">
        <div className="filter__wrapper">
          <h4 className="filter__title bold">Popular filters</h4>
          <label
            className={`filter__label ${
              isChecked ? "filter__label--active" : ""
            }`}
          >
            <input
              type="checkbox"
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
            <span
              className={`filter__checkbox ${
                isChecked ? "filter__checkbox--active" : ""
              }`}
              aria-hidden="true"
            />
            Breakfast included
          </label>

          <label
            className={`filter__label ${
              isChecked ? "filter__label--active" : ""
            }`}
          >
            <input
              type="checkbox"
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
            <span
              className={`filter__checkbox ${
                isChecked ? "filter__checkbox--active" : ""
              }`}
              aria-hidden="true"
            />
            Wifi included
          </label>

          <label
            className={`filter__label ${
              isChecked ? "filter__label--active" : ""
            }`}
          >
            <input
              type="checkbox"
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
            <span
              className={`filter__checkbox ${
                isChecked ? "filter__checkbox--active" : ""
              }`}
              aria-hidden="true"
            />
            Parking
          </label>

          <label
            className={`filter__label ${
              isChecked ? "filter__label--active" : ""
            }`}
          >
            <input
              type="checkbox"
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
            <span
              className={`filter__checkbox ${
                isChecked ? "filter__checkbox--active" : ""
              }`}
              aria-hidden="true"
            />
            Pool
          </label>

          <label
            className={`filter__label ${
              isChecked ? "filter__label--active" : ""
            }`}
          >
            <input
              type="checkbox"
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
            <span
              className={`filter__checkbox ${
                isChecked ? "filter__checkbox--active" : ""
              }`}
              aria-hidden="true"
            />
            Romantic
          </label>
        </div>

        <div className="filter__border"></div>

        <div className="filter__wrapper">
          <div className="filter__title--wrapper">
            <h4 className="filter__title bold">Price</h4>
            <p className="filter__help-text">(for 1 night)</p>
          </div>

          <RangeBar />
        </div>

        <div className="filter__border"></div>

        <div className="filter__wrapper">
          <h4 className="filter__title bold">Type</h4>
          <label
            className={`filter__label ${
              isChecked ? "filter__label--active" : ""
            }`}
          >
            <input
              type="checkbox"
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
            <span
              className={`filter__checkbox ${
                isChecked ? "filter__checkbox--active" : ""
              }`}
              aria-hidden="true"
            />
            Hotel
          </label>
          <label
            className={`filter__label ${
              isChecked ? "filter__label--active" : ""
            }`}
          >
            <input
              type="checkbox"
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
            <span
              className={`filter__checkbox ${
                isChecked ? "filter__checkbox--active" : ""
              }`}
              aria-hidden="true"
            />
            Apartment
          </label>
          <label
            className={`filter__label ${
              isChecked ? "filter__label--active" : ""
            }`}
          >
            <input
              type="checkbox"
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
            <span
              className={`filter__checkbox ${
                isChecked ? "filter__checkbox--active" : ""
              }`}
              aria-hidden="true"
            />
            Villa
          </label>
          <label
            className={`filter__label ${
              isChecked ? "filter__label--active" : ""
            }`}
          >
            <input
              type="checkbox"
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
            <span
              className={`filter__checkbox ${
                isChecked ? "filter__checkbox--active" : ""
              }`}
              aria-hidden="true"
            />
            Glamping
          </label>
        </div>

        <div className="filter__border"></div>

        <div className="filter__wrapper">
          <h4 className="filter__title bold">Rating</h4>
          <div className="filter__rating">
            <div className="filter__rating--btn">1</div>
            <div className="filter__rating--btn">2</div>
            <div className="filter__rating--btn">3</div>
            <div className="filter__rating--btn">4</div>
            <div className="filter__rating--btn">5</div>
          </div>
        </div>

        <div className="filter__border"></div>

        <div className="filter__wrapper">
          <h4 className="filter__title bold">Free cancellation</h4>
          <label
            className={`filter__label ${
              isChecked ? "filter__label--active" : ""
            }`}
          >
            <input
              type="checkbox"
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
            <span
              className={`filter__checkbox ${
                isChecked ? "filter__checkbox--active" : ""
              }`}
              aria-hidden="true"
            />
            Free cancellation
          </label>
        </div>

        <div className="filter__border"></div>

        <div className="filter__wrapper">
          <div className="filter__wrap">
            <Icon
              icon="ep:arrow-down-bold"
              color="#57b15b"
              className="filter__icon"
            />
            <h4 className="filter__title bold">Neighbourhood</h4>
          </div>
        </div>

        <div className="filter__border"></div>

        <div className="filter__wrapper">
          <div className="filter__wrap">
            <Icon
              icon="ep:arrow-down-bold"
              color="#57b15b"
              className="filter__icon"
            />
            <h4 className="filter__title bold">Facilities</h4>
          </div>
        </div>

        <div className="filter__border"></div>

        <div className="filter__wrapper">
          <div className="filter__wrap">
            <Icon
              icon="ep:arrow-down-bold"
              color="#57b15b"
              className="filter__icon"
            />
            <h4 className="filter__title bold">Landmarks</h4>
          </div>
        </div>
      </div>
    </FilterWrapper>
  );
};

export default Filter;
