import styled from "styled-components";
import media from "styled-media-query";

export const HeroSearchWrapper = styled.div`
  width: 100%;
  max-width: 1650px;
  min-width: 300px;

  .heroSearch {
    display: flex;
    width: 100%;
    margin: 40px 0px 70px;
    border-radius: 10px;
    background-color: #fff;
    justify-content: space-between;

    &__input {
      border: solid 1px #dae8db;
      height: 35px;
      border-radius: 6px;
      width: 100%;
      padding: 0px 10px;
    }

    &__search--value {
      padding: 8px 15px;
      border-radius: 8px;
    }

    &__search--value:hover {
      background-color: #dae8db;
    }

    &__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__supportingText {
      font-weight: 500;
      color: #a0a0a0;
      font-size: 1rem;
    }

    &__inputName {
      font-weight: 700;
      color: #1c4726;
      font-size: 1.25rem;
      border: none;
      padding-right: 10px;

      &:hover {
        cursor: pointer;
        color: #57b15b;
      }
    }

    &__button {
      border: none;
      padding: 12px 15px;
      background-color: #57b15b;
      border-radius: 15px;

      &:hover {
        background-color: #dae8db;
        cursor: pointer;

        &--icon {
          color: #1c4726;
        }
      }

      &--icon {
        color: #fff;
        font-size: 1.75rem;
      }
    }

    ${media.lessThan("900px")`
      margin: 10px 0px 10px;
      width: 300px;
      flex-direction: column;

      &__container {
        margin-bottom: 20px;
      }
    `}

    ${media.lessThan("390px")`
      width: 300px;
      padding: 20px;

      &__container {
        margin-bottom: 20px;
      }

      &__button {
        padding: 6px 15px;
      }
    `}
  }

  .heroSearch_search--input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: red;
  }
`;
