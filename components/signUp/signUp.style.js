import styled from "styled-components";
import media from "styled-media-query";

export const SignUpWrapper = styled.div`
  margin: 150px auto;

  .signUp {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title--wrapper {
      width: 547px;
      text-align: center;
      display: flex;
      justify-content: center;
    }

    &__form {
      display: flex;
      margin-top: 40px;
      width: 50%;
      align-items: center;
    }

    &__input {
      border-radius: 10px 0px 0px 10px;

      &::placeholder {
        color: #a0a0a0;
      }
    }

    &__btn {
      border-radius: 0px 10px 10px 0px;
      height: 60px;
      margin-top: 10px;
    }
  }

  ${media.lessThan("1024px")`
    .signUp__form {
      width: 80%;
    }
  `}

  ${media.lessThan("768px")`
    .signUp__btn {
        padding: 10px 15px;
        font-size: 0.875rem;
      }
  `}

  ${media.lessThan("572px")`

    .signUp__title--wrapper {
      width: 95%;
    }

    .signUp__title {
      font-size: 1.875rem;
      line-height: 2.5rem;
    }

    .signUp__form {
        width: 95%;
    }

  `}
`;
