import styled from "styled-components";
import media from "styled-media-query";

export const CheckoutPage = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.lessThan("768px")`
     flex-direction: column;
  `}

  .checkout {
    padding: 30px;
    width: 40%;
    height: 100%;
    background-color: #f1f1f1;

    &__orderSummary {
      margin-left: 45px;
    }

    &__title {
      margin: 40px 0px 20px;
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

    ${media.lessThan("1240px")`
      &__orderSummary {
        margin-left: 0px;
      }
    `}

    ${media.lessThan("768px")`
      width: 100%;

      &__img--wrapper {
        width: 40%;
      }

      &__closeBtn {
      font-size: 2.25rem;
    }

      &__summary {
        margin-top: 20px;

        &--discountInput {
          width: 100%;
        }

        &--border {
        width: 100%;
      }

      &--total-wrapper {
        width: 100%;
      }
      }
    `}

    ${media.lessThan("550px")`
      &__img--wrapper {
        width: 65%;
      }
    `}

    ${media.lessThan("425px")`
      &__img--wrapper {
        width: 100%;
      }
    `}
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

    ${media.lessThan("1240px")`
      &__wrapper {
        width: 100%;
      }
    `}

    ${media.lessThan("768px")`

    width: 100%;
      &__wrapper {
        width: 100%;
      }
    `}
  }
`;
