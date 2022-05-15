import styled from "styled-components";
import media from "styled-media-query";

export const CostumerReview = styled.div`
  margin: 150px auto;

  .costumerReview {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__title {
      line-height: 2rem;
    }

    &__icons {
      display: flex;
      font-size: 1.75rem;
      width: 70px;
      justify-content: space-between;
    }

    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 20px;
    }

    &__card {
      padding: 30px;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      width: 32%;
    }

    &__top--wrapper {
      display: flex;
      align-items: center;
    }

    &__img {
      border-radius: 10px;
      width: 70px;
      margin-right: 20px;
    }

    &__name {
      line-height: 1.5rem;
    }

    &__quote {
      color: #57b15b;
      font-size: 7.25rem;
      font-family: "Overpass";
    }

    &__country {
      color: #a0a0a0;
      font-weight: 600;
      margin-top: 5px;
    }

    &__text {
      margin-top: 20px;
    }
  }

  ${media.lessThan("925px")`
    .costumerReview__card {
      padding: 20px;
      text-align: center;
    }

    .costumerReview__top--wrapper {
      flex-direction: column;
      align-items: center;
    }

    .costumerReview__name {
      margin-top: 20px;
    }

    .costumerReview__img {
      width: 50%;
      height: auto;
      margin-right: 0px;
    }
  `}

  ${media.lessThan("768px")`
      .costumerReview__wrapper {
        flex-direction: column;
      }

      .costumerReview__icons {
        display: flex;
        margin-left: 20px;
        font-size: 1.75rem;
        width: 80px;
      }

      .costumerReview__card {
        width: 100%;
        text-align: left;
        margin-bottom: 20px;
      }

    .costumerReview__top--wrapper {
      flex-direction: row;
      align-items: space-between;
    }

    .costumerReview__img {
      width: 100px;
      height: auto;
      margin-right: 20px;
    }
  `}

  ${media.lessThan("375px")`

    .costumerReview {
      width: 95%;
      margin: 0px auto;
    }

      .costumerReview__wrapper {
        width: 95%;
        margin: 20px auto;
      }

    .costumerReview__title {
        width: 70%;
      }
  `}
`;
