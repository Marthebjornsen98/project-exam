import styled from "styled-components";

export const ImgCollage = styled.div`
  display: flex;
  flex-direction: column;

  .imgCollage {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    &__overlay {
      width: 100%;
      height: 100%;
      max-width: 520px;
      min-width: 320px;
      background-color: rgba(28, 71, 38, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__image {
      border-radius: 10px;
    }

    &__image:hover {
      cursor: pointer;
    }
  }
`;
