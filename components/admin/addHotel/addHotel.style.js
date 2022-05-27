import styled from "styled-components";

export const AddHotelWrapper = styled.div`
  .addHotel {
    &__title {
      margin-bottom: 20px;
    }

    &__subtitle {
      margin: 50px 0px 10px;
    }

    &__supportingText {
      font-size: 0.875rem;
      margin-top: 5px;
      color: #a0a0a0;
    }

    &__flex {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &--name {
        width: 70%;
      }

      &--price {
        width: 28%;
      }

      &--location,
      &--adress,
      &--area {
        width: 32%;
      }

      &--description {
        width: 100%;
      }

      &--img,
      &--about-title {
        width: 49%;
      }

      &--about,
      &--map {
        width: 100%;
      }

      &--details {
        margin-top: 20px !important;
        width: 200px;
      }

      &--star {
        display: flex;
        width: 40%;
        font-weight: 600;
        justify-content: space-between;
      }
    }

    &__checkbox--wrapper {
      width: 100%;
    }

    &__input {
      height: 45px;

      &--container {
        margin-top: 15px;
      }

      &--description {
        height: 120px;
        padding: 20px;
      }

      &--checkbox {
        width: 20px;
        height: 20px;
        border: none;
        margin: 0px 10px 0px 0px;
      }

      &--checkbox:checked {
        background-color: #1c4726;
      }
    }

    &__textarea {
      height: 200px;
      width: 100%;
      padding: 20px;
    }

    &__label--star {
      display: flex;
    }

    &__checkbox {
      display: flex;
      align-items: center;
    }

    &__price--icon {
      height: 44px;
      width: 75px;
      border-radius: 8px;
      font-weight: 600;
      color: #1c4726;
      background-color: #dae8db;
      margin: 6px 8px 0px 0px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__submit {
      margin-top: 50px;
      display: flex;
      justify-content: flex-end;
    }
  }

  #checkbox {
    accent-color: #3f9743;
  }
`;
