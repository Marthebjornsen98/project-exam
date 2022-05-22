import styled from "styled-components";
import media from "styled-media-query";

export const HotelCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 30px 30px;

  ${media.lessThan("1024px")`
      flex-direction: column;
    `}

  .hotelContent {
    width: 70%;
    margin-left: 30px;

    &__title:hover {
      cursor: pointer;
      color: #1c4726;
      font-weight: 800;
    }

    &__location {
      font-size: 1rem;
      color: #a0a0a0;
    }

    &__star {
      display: flex;
      margin-top: 5px;

      &--wrapper {
        margin-right: 6px;
      }
    }

    &__price {
      color: #1c4726;
      font-family: "Overpass";
      margin-top: 10px;
    }

    &__price--span {
      font-size: 1.125rem;
      padding-left: 10px;
    }

    &__description {
      width: 95%;
    }

    &__details--wrapper {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__details {
      font-size: 0.875rem;
      font-weight: 700;
      margin-bottom: 3px;
    }

    &__cancellation {
      color: #57b15b;
      text-align: end;
      margin-bottom: 10px;
      font-size: 1rem;
    }

    ${media.lessThan("1024px")`
      width: 100%;
      margin: 0px 0px 50px 0px;
    `}
  }

  .hotelImg__wrapper {
    margin-right: 0px 30px 100px;
    position: relative;
    width: 510px;
    height: 380px;

    ${media.lessThan("1024px")`
      width: 100%;
      margin: 0px 0px 10px;
    `}

    ${media.lessThan("768px")`
      width: 100%;
      height: 300px;
    `}
  }

  .hotelImg {
    border-radius: 0.6rem;
    cursor: pointer;
  }
`;
