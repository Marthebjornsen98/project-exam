import { RangeBarWrapper } from "./rangeBar.style";

import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

const RangeBar = () => {
  const [value, setValue] = React.useState([0, 500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <RangeBarWrapper>
      <div className="filter__number--wrapper">
        {value.map((price) => {
          return <p className="filter__numbers">${price}</p>;
        })}
      </div>

      <Box>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          getAriaValueText={valuetext}
          min={0}
          max={500}
        />
      </Box>
    </RangeBarWrapper>
  );
};

export default RangeBar;
