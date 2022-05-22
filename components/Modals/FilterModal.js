import { Icon } from "@iconify/react";
import { FilterWrapper } from "../filter/filter.style";
import RangeBar from "../filter/rangeBar";
import CheckboxFilter from "../filter/checkboxFilter";

const FilterModal = ({ setOpenFilter }) => {
  let state = { acceptence: false };

  const handleCheckbox = ({ state }) => {
    return state;
  };
  return (
    <div>
      <div className="modal-bg" onClick={() => setOpenFilter(false)} />
      <div className="modal modal__filter">
        <div className="modal__close">
          <Icon
            icon="heroicons-solid:x"
            className="modal__close--btn"
            onClick={() => setOpenFilter(false)}
          />
        </div>
        <div className="modal__content">
          <FilterWrapper>
            <div className="filter">
              <div className="filter__wrapper">
                <h4 className="filter__title bold">Popular filters</h4>
                <CheckboxFilter
                  label={"Breakfast included"}
                  selected={state}
                  onChange={handleCheckbox}
                />
                <CheckboxFilter
                  label={"Wifi included"}
                  selected={state}
                  onChange={handleCheckbox}
                />
                <CheckboxFilter
                  label={"Parking"}
                  selected={state}
                  onChange={handleCheckbox}
                />
                <CheckboxFilter
                  label={"Pool"}
                  selected={state}
                  onChange={handleCheckbox}
                />
                <CheckboxFilter
                  label={"Fitness center"}
                  selected={state}
                  onChange={handleCheckbox}
                />
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
                <CheckboxFilter
                  label={"Hotel"}
                  selected={state}
                  onChange={handleCheckbox}
                />
                <CheckboxFilter
                  label={"Apartment"}
                  selected={state}
                  onChange={handleCheckbox}
                />
                <CheckboxFilter
                  label={"Villa"}
                  selected={state}
                  onChange={handleCheckbox}
                />
                <CheckboxFilter
                  label={"Glamping"}
                  selected={state}
                  onChange={handleCheckbox}
                />
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
                <CheckboxFilter
                  label={"Free cancellation"}
                  selected={state}
                  onChange={handleCheckbox}
                />
              </div>
            </div>
          </FilterWrapper>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
