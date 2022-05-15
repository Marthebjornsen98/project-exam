import styled from "styled-components";

export const CheckoutPage = styled.div`
  display: flex;
  justify-content: space-between;
  display: flex;
  justify-content: space-between;

  .checkout {
    padding: 30px;
    width: 40%;
    height: 100vh;
    background-color: #f1f1f1;

    &__orderSummary {
      margin-left: 45px;
    }

    &__title {
      margin: 50px 0px 20px;
    }

    &__img {
      border-radius: 10px;
    }

    &__img--wrapper {
      display: flex;
    }

    &__closeBtn {
      margin-left: 20px;
    }

    &__summary {
      margin-top: 15px;

      &--adress {
        margin-top: 10px;
        font-size: 0.875rem;
        color: #a0a0a0;
      }

      &--border {
        width: 90%;
        margin: 20px 0px;
        border: 1px solid #dcdcdc;
      }

      &--discountLabel {
        font-size: 0.875rem;
      }

      &--discountInput-wrapper {
        display: flex;
        align-items: center;
        margin-top: 10px;
      }

      &--discountInput {
        width: 65%;
        background-color: white;
        height: 45px;
        margin: 0px 20px 0px 0px;
      }

      &--discountBtn {
        padding: 13px 30px;
      }

      &--total-wrapper {
        display: flex;
        justify-content: space-between;
        width: 90%;
      }

      &--total-label {
        font-size: 1rem;
        margin-bottom: 10px;
      }

      &--price {
        font-family: "Overpass";
        font-size: 1rem;
        font-weight: 700;
      }
    }
  }

  .paymentDetails {
    width: 60%;
    padding: 30px;

    &__wrapper {
      width: 85%;
      margin: 40px auto 0px;
    }

    &__logo {
      display: flex;
      width: 100%;
      justify-content: flex-end;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
    }

    &__subtext {
      margin-top: 10px;
    }
  }
`;
