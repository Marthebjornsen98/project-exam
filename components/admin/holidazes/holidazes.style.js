import styled from "styled-components";

export const HolidazesWrapper = styled.div`
  .holidazes {
    &__table {
      margin-bottom: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &--title,
      &--item {
        display: flex;
        justify-content: flex-start;
      }

      &--item-column {
        flex-direction: column;
      }

      &--border {
        width: 100%;
        height: 2px;
        border: 2px solid #f1f1f1;
      }
    }

    &__id {
      width: 20px;
    }

    &__images {
      border-radius: 6px;
    }

    &__img--wrapper,
    &__title {
      width: 150px;
    }

    &__price--number {
      font-family: "Overpass";
      font-size: 1rem;
      width: 40px;
      font-weight: 700;
      color: #57b15b;
    }

    &__price--title {
      width: 40px;
      font-weight: 700;
      color: #57b15b;
    }

    &__featured {
      width: 100px;
    }

    &__description {
      display: flex;
      width: 200px;
      flex-direction: column;
    }

    &__icon {
      color: #1c4726;
      font-size: 1.5rem;

      &:hover {
        color: #57b15b;
        cursor: pointer;
      }
    }

    &__delete {
      width: 60px;
      border: none;
      margin-right: 10px;
      background-color: transparent;
    }

    &__email {
      width: 150px;
    }

    &__subject {
      width: 200px;
    }

    &__email {
      width: 200px;
    }

    &__message {
      width: 500px;
      display: flex;
      flex-direction: column;
    }

    &__readMore-readLess {
      font-size: 0.875rem;
      color: #1c4726;
      margin-top: 8px;
      font-weight: 600;

      &:hover {
        cursor: pointer;
        color: #57b15b !important;
      }
    }
  }
`;
