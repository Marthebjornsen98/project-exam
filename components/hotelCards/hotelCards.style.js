import styled from "styled-components";

export const HotelCards = styled.div`
  display: flex;
  justify-content: space-between;

  .hotelImg__wrapper {
    margin-right: 30px;
    margin-bottom: 100px;
  }

  .hotelImg {
    border-radius: 0.6rem;
    cursor: pointer;
  }

  .hotelContent {
    max-width: 620px;

    &__title:hover {
      cursor: pointer;
      color: #1c4726;
      font-weight: 800;
    }

    &__location {
      font-size: 1rem;
      color: #a0a0a0;
      margin: 5px;
    }

    &__price {
      color: #1c4726;
      font-family: var(--secondary-font);
      margin-top: 30px;
    }

    &__price--span {
      font-size: 1.125rem;
      padding-left: 10px;
    }

    &__details--wrapper {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__details {
      margin-bottom: 8px;
    }

    &__cancellation {
      color: #57b15b;
      text-align: end;
      margin-bottom: 10px;
      font-size: 1rem;
    }
  }
`;
