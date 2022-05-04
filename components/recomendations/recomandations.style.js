import styled from "styled-components";

export const RecomandationWrapper = styled.div`
  margin: 100px auto;

  .recomendation {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;

    &__wrapper {
      width: 32%;
      max-width: 660px;
      min-width: 320px;
    }

    &__img {
      border-radius: 10px;
    }

    &__icon--wrapper {
      display: flex;
      justify-content: space-between;
      width: 95%;
      margin-top: 20px;
    }

    &__icons {
      display: flex;
      align-items: center;
    }

    &__icon--text {
      font-family: "Overpass";
      margin-left: 8px;
      font-size: 0.875rem;
    }

    &__text--wrapper {
      margin-top: 25px;
    }

    &__text {
      margin-top: 10px;
    }

    &__btn--wrapper {
      display: flex;
      margin-top: 20px;
      width: 95%;
      justify-content: flex-end;
    }

    &__btn {
      width: fit-content;
    }
  }
`;
