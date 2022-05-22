import styled from "styled-components";
// import media from "styled-media-query";

export const AdminPage = styled.div`
  .admin {
    width: 95%;
    margin: 80px auto 0px;

    &__cta {
      width: 100%;
      display: flex;
      justify-content: space-between;

      &--categories {
        width: 40%;
        display: flex;
        justify-content: space-between;
      }

      &--add {
        display: flex;
        align-items: center;
        padding: 10px 20px;
      }

      &--icon {
        font-size: 1.125rem;
        margin-left: 10px;
      }
    }
  }

  .adminPage__header {
    width: 95%;
    display: flex;
    justify-content: space-between;
    margin: 30px auto 0px;
  }
`;
