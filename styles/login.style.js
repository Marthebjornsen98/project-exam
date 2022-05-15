import styled from "styled-components";
import media from "styled-media-query";

export const LoginStyle = styled.div`
  .login {
    display: flex;
    justify-content: space-between;
    height: 100vh;

    &__form--side {
      width: 45%;
      margin: 0px auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-height: 85vh;
    }

    &__title {
      font-size: 4rem;
      font-weight: 800;
    }

    &__text {
      margin-top: 15px;
      font-size: 1.125rem;
    }

    &__form--wrapper {
      width: 95%;
    }

    &__form--container {
      margin-top: 30px;
    }

    &__input--label {
      font-weight: 600;
      font-size: 0.875rem;
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
      position: relative;
      width: 45%;
      display: flex;
      justify-content: flex-end;
    }

    &__img {
      width: 100%;
    }

    ${media.greaterThan("1441px")`

    &__form--side {
      margin-bottom: 200px;
    }
  `}

    ${media.lessThan("991px")`
    flex-direction: column;
    align-items: flex-start;

    &__form--side {
      width: 90%;
      height: auto;
    }

    &__title--wrapper {
      margin: 110px 0px 0px;
    }

    &__img--side {
      width: 100%;
      height: 40%;
    }
  `}
  

  ${media.lessThan("425px")`

    &__title--wrapper {
      margin-top: 100px;
    }

    &__img--side {
      display: none;
    }

    &__btn {
      width: 100%;
      margin-top: 15px;
      height: 50px;
    }
  `}
  }
`;

export const LoginLogo = styled.div`
  margin-top: 20px;
`;
