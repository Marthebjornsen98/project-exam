import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;

  .contact {
    width: 45%;
    max-width: 800px;
    margin: 0px auto 50px;

    &__title--wrapper {
      margin-bottom: 40px;
    }

    &__title {
      margin-bottom: 10px;
    }

    &__label {
      font-weight: 600;
    }

    &__input {
      height: 45px;
      margin-top: 10px;

      &--textarea {
        height: 130px;
        margin-top: 10px;
      }
    }

    &__name-email--wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 30px;
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
      margin-top: 30px;
    }
  }
`;
