import { PropTypes } from "prop-types";
import { CheckboxWrapper } from "./checkboxFilter.style";
import Checkbox from "@mui/material/Checkbox";

const CheckboxFilter = ({ label, selected, onChange }) => {
  const handleChange = (e) => {
    const checked = e.target;
    onChange(checked);
  };

  return (
    <CheckboxWrapper>
      <div className="checkbox">
        <label className="checkbox__label">
          <Checkbox type="checkbox" value={selected} onChange={handleChange} />
          {label}
        </label>
      </div>
    </CheckboxWrapper>
  );
};

CheckboxFilter.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckboxFilter;
