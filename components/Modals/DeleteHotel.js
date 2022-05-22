import { Icon } from "@iconify/react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

import { BaseUrl } from "../../libs/baseUrl";

const DeleteHotel = ({ setDeleteHotel, deleteId, jwt }) => {
  const [didDelete, setDidDelete] = useState(false);
  const Router = useRouter();

  async function handleDelete() {
    try {
      let res = await axios.delete(`${BaseUrl}holidazes/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("res", res);
      setDidDelete(true);
    } catch (error) {
      console.log(error);
      setDidDelete(false);
    } finally {
      setTimeout(() => {
        Router.replace(Router.asPath);
        setDeleteHotel(false);
      }, 2500);
    }
  }
  return (
    <div>
      <div className="modal-bg" onClick={() => setDeleteHotel(false)} />
      <div className="modal">
        <div className="modal__close">
          <Icon
            icon="heroicons-solid:x"
            className="modal__close--btn"
            onClick={() => setDeleteHotel(false)}
          />
        </div>
        {didDelete ? (
          <div className="modal__content modal__content--contact-page">
            <Icon
              icon="akar-icons:circle-check-fill"
              className="modal__check"
            />
            <h2 className="modal__title">Are you sure?</h2>
            <p className="body-text modal__text">
              The hotel was deleted sucessfully!
            </p>
            <button
              className="cta__grass modal__deleteBtn"
              onClick={() => setDeleteHotel(false)}
            >
              Close
            </button>
          </div>
        ) : (
          <div className="modal__content modal__content--contact-page">
            <div className="modal__check">
              <Icon icon="heroicons-solid:information-circle" />
            </div>

            <h2 className="modal__title">Are you sure?</h2>
            <p className="body-text modal__text">
              Are you sure you want to delete the hotel? This action will remove
              and delete all the data you made. You can not retrieve the hotel
              after deleting it.
            </p>

            <button
              className="cta__grass modal__deleteBtn"
              onClick={() => handleDelete()}
            >
              Delete hotel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteHotel;
