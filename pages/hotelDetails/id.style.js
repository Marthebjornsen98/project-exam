import styled from "styled-components";
import media from "styled-media-query";

export const HotelDetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 50px auto;
  justify-content: space-between;

  ${media.lessThan("976px")`
    flex-direction: column; 
    margin-top: 20px;
  `}

  .sliderImg {
    border-radius: 10px;
  }

  .hotelContent__information--wrapper {
    width: 100%;
  }

  .hotelContent__id--page {
    margin: 0px;
    width: 100%;
  }

  .hotelContent__title--id-page {
    font-size: 2rem;
  }

  .hotelContent__price--id-page {
    margin-top: 30px;
    font-size: 2rem;
  }

  .hotelContent__description {
    width: 80%;
    margin-top: 20px;
  }

  .hotelContent__details--wrapper {
    margin-top: 40px;
  }

  .hotelContent__details--id-page {
    margin-bottom: 15px;
    font-size: 1rem;
  }

  .hotelIcons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;

    &__wrapper {
      display: flex;
      align-items: center;
    }

    &__text {
      margin-left: 15px;
      font-weight: 600;
      font-family: "Overpass";
      font-size: 0.875rem;
    }
  }

  .swiper-slide,
  .swiper-slide-active,
  .mySwiper {
    max-width: 550px;
  }

  ${media.lessThan("1185px")`
    .swiper-slide, 
    .swiper-slide-active,
    .mySwiper {
      max-width: 500px;
    }

    .hotelContent__price--id-page {
      margin-top: 20px;
      font-size: 1.875rem;
    }

    .hotelContent__description {
      width: 80%;
      margin-top: 10px;
    }

    .hotelContent__details--wrapper {
      margin-top: 20px;
    }

    .hotelContent__details--id-page {
      margin-bottom: 10px;
    }
  `}

  ${media.lessThan("976px")`

    .hotelCards__id-page {
      margin: 0px !important;
    }
    
    .hotelContent__information--wrapper {
      width: 100%;
      margin: 30px auto 0px auto;
    }

    .hotelContent__description {
      width: 100%;
    }

    .hotelContent__id--page {
      margin: 0px;
    }

    .swiper__wrapper {
      max-width: 100%;
    }

    .swiper-slide,
    .swiper-slide-active,
    .mySwiper {
      max-width: 100%;
    }
  `}

  ${media.lessThan("385px")`
    .hotelContent__details--wrapper {
      flex-direction: column;
      align-items: flex-start;
    }

    .hotelContent__price--id-page {
      margin-top: 30px;
    }

    .hotelContent__btn--wrapper {
        width: 100%;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .hotelContent__btn {
        padding: 12px 90px;
    }
  `}
`;

export const HotelIcons = styled.div`
  .hotelIcons__id-page {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
  }

  .hotelIcons__section--id-page {
    display: flex;
    justify-content: space-between;
    width: 42%;
  }

  .hotelIcons__wrapper--id-page {
    display: flex;
    align-items: center;
    font-weight: 600;
  }

  .hotelIcons__text--id-page {
    margin-left: 10px;
    font-size: 1.125rem;
  }

  ${media.lessThan("976px")`
    .hotelIcons__id-page {
      width: 100%;
    }
  `}

  ${media.lessThan("677px")`
    .hotelIcons__id-page {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 20px;
    }

    .hotelIcons__wrapper--id-page {
      width: 200px;
      margin-bottom: 25px;
    }

    .hotelIcons__text--id-page {
      margin-left: 20px;
    }
  `}
`;

export const HotelDetail__about = styled.div`
  width: 100%;
  margin: 220px auto 100px;

  ${media.lessThan("1024px")`
    margin: 100px auto 100px;
  `}

  ${media.lessThan("677px")`
    margin: 50px auto 100px;
  `}

  .detailAbout {
    display: flex;
    justify-content: space-between;

    &__text--wrapper {
      width: 48%;
      margin-right: 30px;
    }

    &__map {
      border-radius: 10px;
    }

    &__map--details {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 10px;
    }

    &__adress {
      color: #434343;
    }

    &__text {
      margin-top: 15px;
    }

    &__map--text {
      color: #57b15b;
      font-weight: 600;
      font-size: 1.125rem;

      &:hover {
        color: #1c4726;
        font-weight: 700;
      }
    }

    ${media.lessThan("1024px")`
      flex-direction: column;
      align-items: center;
      text-align: center;

      &__text--wrapper {
        width: 100%;
        margin: 0px 0px 30px;
      }

      &__map--wrapper{
        width: 64%;
      }
    `}

    ${media.lessThan("677px")`
    &__map--wrapper{
        width: 86%;
      }
    `}
  
    ${media.lessThan("425px")`
    &__map--wrapper{
        width: 100%;
      }
    `}
  }
`;

export const Facilities = styled.div`
  width: 100%;
  margin: 100px auto;

  ${media.lessThan("768px")`
      text-align: center;
      margin: 50px auto;
    `}

  .facilities {
    display: flex;
    margin-top: 40px;
    justify-content: space-between;

    &__icon--wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
    }

    &__icon--text {
      margin-left: 20px;
    }

    ${media.lessThan("768px")`
      flex-direction: column;
      align-items: center;

      &__icon--wrapper {
        width: 220px;
      }
    `}
  }
`;

export const GuestReview = styled.div`
  width: 100%;
  margin: auto;

  .progress {
    display: flex;
    justify-content: space-between;

    &__wrapper {
      width: 25%;
    }

    &__category {
      margin-top: 20px;
    }

    &__title {
      font-weight: 700;
    }

    &__bar--wrapper {
      display: flex;
      margin-top: 10px;
    }

    &__bar {
      width: 100%;
      min-height: 8px;
    }

    &__number {
      font-family: "Overpass";
      font-weight: 700;
    }

    ${media.lessThan("768px")`
      flex-direction: column;
      align-items: center;

      &__wrapper {
      width: 100%;
    }
    `}
  }
`;

export const ProgressButton = styled.div`
  width: 100%;
  margin: 40px auto 100px;
  display: flex;
  justify-content: flex-end;

  .progessBtn {
    width: fit-content;
  }
`;
