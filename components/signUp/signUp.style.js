import styled from "styled-components";

export const SignUpWrapper = styled.div`
  margin: 150px auto;

  .signUp {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title--wrapper {
      width: 40%;
      text-align: center;
      display: flex;
      justify-content: center;
    }

    &__form {
      display: flex;
      margin-top: 40px;
      width: 50%;
    }

    &__input {
      border-radius: 10px 0px 0px 10px;
    }

    &__btn {
      border-radius: 0px 10px 10px 0px;
    }
  }
`;
