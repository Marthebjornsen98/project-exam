import styled from "styled-components";

export const HotelDetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 50px auto;
  justify-content: space-between;

  .sliderImg {
    border-radius: 10px;
  }

  .hotelIcons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;

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

  .hotelContent__details--id-page {
    margin-left: 30px;
  }

  .hotelContent__title--id-page {
    font-size: 2rem;
  }

  .hotelContent__id--page {
    max-width: 700px;
  }

  .details__id--page {
    margin-top: 20px;
  }

  .hotelContent__description {
    width: 90%;
    margin-top: 10px;
  }
`;

export const HotelDetail__about = styled.div`
  width: 100%;
  margin: 220px auto 100px;

  .detailAbout {
    display: flex;
    justify-content: space-between;

    &__title {
      width: 48%;
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
  }
`;

export const Facilities = styled.div`
  width: 100%;
  margin: 100px auto;

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
