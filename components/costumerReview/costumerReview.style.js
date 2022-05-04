import styled from "styled-components";

export const CostumerReview = styled.div`
  margin: 150px auto;

  .costumerReview {
    display: flex;
    justify-content: space-between;

    &__icons {
      display: flex;
      font-size: 1.75rem;
      width: 70px;
      justify-content: space-between;
    }

    &__wrapper {
      display: flex;
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
`;
