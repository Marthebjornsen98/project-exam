import styled from "styled-components";

export const Login = styled.div`
  .login {
    display: flex;
    justify-content: space-between;
    height: 100vh;

    &__title--wrapper {
      margin-bottom: 50px;
    }

    &__title {
      font-size: 4rem;
      font-weight: 800;
    }

    &__text {
      margin-top: 15px;
      font-size: 1.125rem;
    }

    &__form--side {
      width: 45%;
      margin: 0px auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-height: 85vh;
    }

    &__form--wrapper {
      width: 95%;
    }

    &__form--container {
      margin-top: 30px;
    }

    &__input--label {
      font-weight: 600;
    }

    &__input--bar {
      margin-top: 10px;
      height: 45px;
    }

    &__btn--wrapper {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
    }

    &__img--side {
      width: 45%;
      display: flex;
      justify-content: flex-end;
    }

    &__img {
      height: 100vh;
    }
  }
`;

export const LoginLogo = styled.div`
  margin-top: 30px;
`;
