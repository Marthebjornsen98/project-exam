import styled from "styled-components";

export const HeroBanner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0px auto;
  flex-direction: column;
  justify-content: space-between;

  .heroContent {
    width: 90%;
    max-width: 1650px;
    min-width: 320px;
    margin: 0px auto;

    &__container--wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 30px 50px 50px;
      border-radius: 0px 10px 0px 0px;
      background-color: #fff;
    }

    &__select {
      background-color: #fff;
      width: fit-content;
      padding: 15px 15px 10px;
      border-radius: 15px 15px 0px 0px;
      display: flex;
      justify-content: space-between;
    }

    &__select--btn {
      background-color: #57b15b;
      padding: 12px 25px;
      border-radius: 5px;
      color: #fff;
      font-weight: 600;
      font-size: 1rem;
      display: flex;
    }

    &__right--btn {
      background-color: #f1f1f1;
      color: #434343;
      font-weight: 600;
      margin-left: 10px;
    }

    &__hotel {
      margin-left: 10px;
    }

    &__container {
      display: flex;
      align-items: center;
    }

    &__icon--wrapper {
      background-color: #f1f1f1;
      width: fit-content;
      padding: 5px 8px;
      border-radius: 100px;
      margin-right: 15px;

      &:hover {
        background-color: #dae8db;
        color: #1c4726;
        cursor: pointer;
      }
    }

    &__supportingText {
      font-weight: 500;
      color: #a0a0a0;
      font-size: 1rem;
    }

    &__input {
      display: none;
    }

    &__inputName {
      font-weight: 700;
      color: #434343;
      font-size: 1.25rem;
      margin-top: 10px;

      &:hover {
        cursor: pointer;
      }
    }

    &__search--button {
      padding: 12px 15px;
      border: none;
      background-color: #57b15b;
      border-radius: 15px;

      &:hover {
        background-color: #dae8db;
        cursor: pointer;
      }
    }

    &__search--icon {
      color: #fff;
      font-size: 2rem;
    }
  }
`;
