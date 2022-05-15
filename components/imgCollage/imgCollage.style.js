import styled from "styled-components";

export const ImgCollage = styled.div`
  display: flex;
  flex-direction: column;

  .imgCollage {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;

    &__image--wrapper {
      position: relative;
      width: 32%;
      height: 300px;
      margin-bottom: 20px;
    }

    &__image {
      border-radius: 10px;
    }

    &__overlay {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 99;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(28, 71, 38, 0.5);
    }

    &__image:hover {
      cursor: pointer;
    }
  }
`;
