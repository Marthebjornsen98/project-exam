import styled from "styled-components";
import media from "styled-media-query";

export const HeroSearchWrapper = styled.div`
  width: 90%;
  max-width: 1650px;
  min-width: 300px;
  margin: 0px auto 40px;

  .heroSearch {
    display: flex;
    padding: 30px;
    border-radius: 10px;
    background-color: #fff;
    justify-content: space-between;

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

      &--icon {
        color: #fff;
        font-size: 1.75rem;
      }

      &:hover {
        background-color: #dae8db;
        cursor: pointer;
      }
    }

    ${media.lessThan("1054px")`
      width: 300px;
      padding: 30px;
      flex-direction: column;

      &__container {
        margin-bottom: 30px;
      }

      &__button {
        padding: 8px 15px;
      }
    `}

    ${media.lessThan("1054px")`
      width: 350px;
      padding: 30px;
      flex-direction: column;

      &__container {
        margin-bottom: 30px;
      }

      &__button {
        padding: 8px 15px;
      }
    `}

    ${media.lessThan("390px")`
      width: 300px;
      padding: 20px;
      margin: 0px auto 100px;

      &__container {
        margin-bottom: 20px;
      }

      &__button {
        padding: 6px 15px;
      }
    `}
  }
`;
