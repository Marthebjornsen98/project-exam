import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #dae8db;
  width: 100%;
  height: auto;
  padding: 40px 0px;

  .footer {
    width: 90%;
    margin: auto;

    &__top--wrapper {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    &__links--wrapper {
      display: flex;
      width: 40%;
      justify-content: space-between;
    }

    &__links {
      color: #1c4726;
      font-weight: 700;
      margin-bottom: 10px;
    }

    &__bottom--wrapper {
      display: flex;
      margin-top: 90px;
    }

    &__rights {
      color: #a0a0a0;
      font-size: 0.875rem;
      text-align: center;
      width: 100%;
    }
  }
`;
