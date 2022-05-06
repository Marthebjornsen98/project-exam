import styled from "styled-components";

export const CheckboxWrapper = styled.div`
  margin-top: 20px;

  .checkbox {
    margin-bottom: 15px;

    &__label {
      display: flex;
      align-items: center;
      font-size: 1rem;
      margin: 20px 0px;

      &:hover {
        font-weight: 600;
        cursor: pointer;
      }
    }
  }

  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root {
    padding: 0px;
    width: 20px;
    height: 20px;
  }

  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root {
    border: 2px solid #1c4726;
    background-color: #fff;
    margin-right: 10px;
    border-radius: 4px;
    color: transparent;
    background-color: transparent;
  }

  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked,
  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate {
    color: #1c4726;
  }
`;
