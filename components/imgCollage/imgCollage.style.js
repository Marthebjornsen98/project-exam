import styled from "styled-components";
import media from "styled-media-query";

export const ImgCollage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  .imgCollage {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;

    &__place {
      position: relative;
      z-index: 99;
      color: #fff;

      &:hover {
        color: #dae8db;
        cursor: pointer;
      }
    }

    &__image--wrapper {
      position: relative;
      width: 32%;
      height: 300px;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__image {
      border-radius: 10px;
    }
  }

  ${media.lessThan("768px")`
    .imgCollage {
      flex-direction: column;

      &__image--wrapper {
      position: relative;
      width: 100%;
      height: 450px;
      margin-bottom: 20px;
    }
    }
  `}
`;
