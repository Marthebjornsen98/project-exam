import styled from "styled-components";
import media from "styled-media-query";

export const ContactWrapper = styled.div`
  .contact {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__img {
      position: relative;
      width: 40%;
      height: 100vh;
      padding: 20px 0px 0px 50px;
    }

    &__nav {
      width: 100%;

      &--wrapper {
        width: 55%;
      }
    }

    &__right-side {
      width: 52%;
      margin-right: 50px;
      display: flex;
      height: 100vh;
      flex-direction: column;
    }

    &__form {
      margin-top: 40px;
    }

    &__title--wrapper {
      margin-bottom: 30px;
    }

    &__title {
      margin-bottom: 5px;
    }

    &__input {
      height: 45px;
      margin-top: 10px;

      &--textarea {
        height: 120px;
        margin-top: 10px;
        padding-top: 20px;
      }
    }

    &__name-email--wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 20px;
    }

    &__name-email {
      width: 49%;
    }

    &__input--container {
      margin-bottom: 20px;
    }

    &__btn--wrapper {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
    }

    ${media.lessThan("1024px")`
    &__img {
      width: 25%;
      padding: 20px 0px 0px 20px;
    }

    &__right-side {
      width: 69%;
      margin-right: 20px;
    }
  `}

    ${media.lessThan("768px")`

    &__img {
      display: none;
    }

    &__right-side {
      width: 100%;
      margin: 0px 20px;
    }
  `}
  }
`;
