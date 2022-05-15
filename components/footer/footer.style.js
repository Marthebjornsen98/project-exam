import styled from "styled-components";
import media from "styled-media-query";

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
      align-items: flex-end;
    }

    &__links--wrapper {
      display: flex;
      width: 40%;
      margin-bottom: 0px;
      align-items: center;
      justify-content: space-between;
    }

    &__links {
      color: #1c4726;
      font-weight: 700;
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

  ${media.lessThan("600px")`
      .footer__links--wrapper {
        width: 55%;
      }

      .footer__bottom--wrapper {
        margin-top: 30px;
      }
  `}

  ${media.lessThan("488px")`
      .footer__top--wrapper {
        align-items: flex-start;
      }

      .footer__links--wrapper {
        flex-direction: column;
        align-items: flex-end;
      }

      .footer__links {
        font-size: 1rem;
        margin-bottom: 20px;
      }
  `}
`;
