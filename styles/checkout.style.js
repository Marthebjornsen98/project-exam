import styled from "styled-components";

export const CheckoutPage = styled.div`
  display: flex;
  justify-content: space-between;

  .checkout {
    &__orderSummary {
      width: 40%;
      height: 100vh;
      padding: 30px;
      background-color: #f1f1f1;
    }

    &__title {
      margin-top: 70px;
    }
  }

  .paymentDetails {
    width: 60%;
    padding: 30px;

    &__wrapper {
      width: 85%;
      margin: 60px auto 0px;
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
