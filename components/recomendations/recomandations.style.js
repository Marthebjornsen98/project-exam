import styled from "styled-components";
import media from "styled-media-query";

export const RecomandationWrapper = styled.div`
  margin: 100px auto;

  ${media.lessThan("768px")`
      margin: 50px auto;
    `}

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

    &__icon--wrapper {
      display: flex;
      justify-content: space-between;
      width: 95%;
      margin-top: 20px;
    }

    &__img {
      border-radius: 10px;
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

    ${media.lessThan("1040px")`
      &__wrapper {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 100%;
        margin-bottom: 50px;
      }

      &__description {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 30px;
      }

      &__icon--wrapper {
        margin-top: 0px;
      }

      &__text--wrapper {
        margin-top: 10px;
      }

      &__btn--wrapper {
        width: 100%;
        margin-top: 10px;
      }

      &__btn {
        padding: 10px 40px;
      }
    `}

    ${media.lessThan("836px")`

    &__wrapper {
      flex-direction: column;
      margin-bottom: 50px;
    }

    &__description {
      width: 98%;
      margin: 30px auto 0px auto;
    }
  `}
  }
`;
