import styled from "styled-components";

export const FilterWrapper = styled.div`
  width: 250px;
  height: 100vh;

  .filter {
    &__title {
      font-size: 1.25rem;
    }

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

    &__label--active {
      font-weight: 600;
    }

    &__checkbox {
      display: inline-block;
      height: 20px;
      width: 20px;
      border: 2px solid #1c4726;
      background-color: #fff;
      margin-right: 10px;
      border-radius: 4px;
    }

    &__checkbox--active {
      background: #1c4726;
    }

    &__border {
      width: 90%;
      border: 1px solid #f1f1f1;
      margin: 40px 0px;
    }

    &__title--wrapper {
      display: flex;
      align-items: center;
    }

    &__help-text {
      margin-left: 10px;
      color: #a0a0a0;
      font-weight: 600;
    }

    &__numbers {
      font-family: "Overpass";
      font-size: 0.875rem;
      font-weight: 300;
      margin-top: 8px;
    }

    &__rating {
      display: flex;
      width: 90%;
      margin-top: 20px;
      justify-content: space-between;

      &--btn {
        width: 38px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #dcdcdc;
        border-radius: 8px;
        color: #57b15b;
        font-weight: 700;
        font-size: 1.125rem;
        font-family: "Overpass";

        &:hover {
          background-color: #57b15b;
          border: 2px solid #57b15b;
          cursor: pointer;
          color: #fff;
        }
      }
    }

    &__wrap {
      display: flex;
    }

    &__icon {
      font-size: 1.5rem;
      margin-right: 10px;
    }
  }

  input[type="checkbox"] {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
  }
`;
