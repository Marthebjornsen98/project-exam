import styled from "styled-components";

export const FilterWrapper = styled.div`
  width: 250px;
  height: 100vh;

  .filter {
    &__title {
      font-size: 1.25rem;
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
        padding-top: 3px;
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
`;
