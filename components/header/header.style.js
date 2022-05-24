import styled from "styled-components";
import media from "styled-media-query";

export const Nav = styled.div`
  display: flex;
  width: 95%;
  max-width: 1400px;
  min-width: 300px;
  height: 100px;
  margin: 0px auto;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan("590px")`
    width: 90%;
  `}

  .nav {
    display: flex;
    justify-content: space-between;
    width: 35%;

    &__link {
      color: #1c4726;
      font-size: 1rem;
    }
  }

  .bottomNavigation {
    display: none;
  }

  ${media.lessThan("719px")`
  .topNavigation {
      display: none;
    }

    .login__btn {
      padding: 8px 20px;
    }

    .logo {
      padding-left: 10px;
    }

    .bottomNavigation {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      display: flex;
      background-color: #fff;
      height: 80px;
      justify-content: center;
      align-items: center;
      z-index: 99;
      box-shadow: 1px -9px 10px 7px rgba(0,0,0,0.07);
      -webkit-box-shadow: 1px -9px 10px 7px rgba(0,0,0,0.07);
      -moz-box-shadow: 1px -9px 10px 7px rgba(0,0,0,0.07);

    &__navbar {
      width: 80%;
      display: flex;
      margin: 0px auto;
      justify-content: space-between;
    }
  `}

  .bottomNav__display {
    display: none;
  }
`;
