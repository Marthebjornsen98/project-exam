import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  width: 95%;
  max-width: 1400px;
  min-width: 320px;
  height: 100px;
  margin: 0px auto;
  align-items: center;
  justify-content: space-between;

  .nav {
    display: flex;
    justify-content: space-between;
    width: 35%;

    &__link {
      color: #1c4726;
      font-size: 1rem;
    }
  }
`;
