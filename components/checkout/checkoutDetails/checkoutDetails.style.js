import styled from "styled-components";

export const CheckoutForm = styled.div`
  margin-top: 40px;

  .checkoutForm {
    &__input--wrapper {
      margin-top: 20px;
    }

    &__input {
      height: 50px;
    }

    &__input--overpass {
      font-family: "Overpass";
      height: 50px;

      &::placeholder {
        font-family: "Overpass";
      }
    }

    &__input--flex {
      display: flex;
      justify-content: space-between;
    }

    &__input--half {
      width: 49%;
    }

    &__btn {
      width: 100%;
      margin: 40px 0px 10px;
      height: 55px;
    }

    &__privacy {
      font-size: 0.875rem;
    }
  }
`;
