import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BaseUrl } from "../../../libs/baseUrl";
import { useRouter } from "next/router";

// Styles
import { AddHotelWrapper } from "./addHotel.style";

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Title needs to be longer then 2 letters")
    .max(50, "The title is too long")
    .required("Title is required"),
  price: Yup.string().required("Required"),
  location: Yup.string().required("Location is required"),
  description: Yup.string()
    .min(10, "The description is too short")
    .max(300, "The description is too long")
    .required("Description is required"),
  slider_img: Yup.object().shape({
    slider_img1: Yup.string().required("Image is required"),
    slider_img_2: Yup.string().required("Image is required"),
    slider_img_3: Yup.string().required("Image is required"),
    slider_img_4: Yup.string().required("Image is required"),
    slider_img_alt_1: Yup.string().required("Description is required"),
    slider_img_alt_2: Yup.string().required("Description is required"),
    slider_img_alt_3: Yup.string().required("Description is required"),
    slider_img_alt_4: Yup.string().required("Description is required"),
  }),
  about: Yup.string()
    .min(2, "The text is too short")
    .max(100, "The text is too long")
    .required("Text about the hotel is required"),
  map: Yup.string().required("Map is required"),
  hotels_image: Yup.string().required("Preview image is required"),
  adress: Yup.string()
    .min(2, "The adress is too short")
    .max(100, "The adress is too long")
    .required("Adress is required"),
  about_title: Yup.string()
    .min(2, "The about title is too short")
    .max(100, "The about title  is too long")
    .required("Title is required"),
  area: Yup.string().required("Area is required"),
  stars: Yup.array()
    .of(
      Yup.object().shape({
        star: Yup.boolean().required("Required"),
      })
    )
    .required("Stars is required")
    .min(2, "You must have 2 stars"),
});

const AddHotel = ({ setIfOpen, jwt }) => {
  const Router = useRouter();

  return (
    <>
      <div className="modal-bg" onClick={() => setIfOpen(false)} />
      <div className="modal">
        <div className="modal__content">
          <Formik
            initialValues={{
              title: "",
              price: "",
              location: "",
              description: "",
              about: "",
              location_review: false,
              comfort: false,
              free_wifi: false,
              cleanliness: false,
              facilities_review: false,
              staff: false,
              map: "",
              adress: "",
              about_title: "",
              hotels_image: "",
              featured: false,
              area: "",
              facilities: {
                teaCoffee_maker: false,
                room_service: false,
                gym: false,
                bar: false,
                nonSmoking_rooms: false,
                breakfast: false,
                private_parking: false,
                restaurant: false,
                swimming_pool: false,
              },
              details: {
                balcony: false,
                free_wifi: false,
                bed_size: false,
                persons: false,
                metro: false,
              },
              slider_img: {
                slider_img1: "",
                slider_img_alt_1: "",
                slider_img_2: "",
                slider_img_alt_2: "",
                slider_img_3: "",
                slider_img_alt_3: "",
                slider_img_4: "",
                slider_img_alt_4: "",
              },
              stars: [
                {
                  id: "",
                  star: false,
                },
                {
                  id: "",
                  star: false,
                },
                {
                  id: "",
                  star: false,
                },
                {
                  id: "",
                  star: false,
                },
                {
                  id: "",
                  star: false,
                },
              ],
            }}
            validationSchema={SignupSchema}
            onSubmit={(newHotel) => {
              console.log(newHotel);
              async function postNewData() {
                let res = await axios.post(`${BaseUrl}holidazes`, newHotel, {
                  headers: {
                    Authorization: `Bearer ${jwt}`,
                  },
                });
                alert("Congrats! You added a new hotel!");
                Router.replace(Router.asPath);
                console.log(res);
              }
              postNewData();
            }}
          >
            {({ errors, touched, values }) => (
              <AddHotelWrapper>
                <Form className="addHotel">
                  <h2 className="addHotel__title">Add Hotel</h2>

                  <div className="addHotel__flex">
                    <div className="addHotel__input--container addHotel__flex--name">
                      <label className="label">Name</label>
                      <Field name="title" className="input addHotel__input" />
                      {errors.title && touched.title ? (
                        <div className="input__error">{errors.title}</div>
                      ) : null}
                    </div>

                    <div className="addHotel__input--container addHotel__flex--price">
                      <label className="label">Price</label>
                      <div className="addHotel__flex">
                        <div className="addHotel__price--icon">$</div>
                        <Field name="price" className="input addHotel__input" />
                      </div>
                      {errors.price && touched.price ? (
                        <div className="input__error">{errors.price}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="addHotel__flex">
                    <div className="addHotel__input--container addHotel__flex--location">
                      <label className="label">Location</label>
                      <Field
                        name="location"
                        className="input addHotel__input"
                      />
                      {errors.location && touched.location ? (
                        <div className="input__error">{errors.location}</div>
                      ) : null}
                    </div>

                    <div className="addHotel__input--container addHotel__flex--area">
                      <label className="label">Area</label>
                      <Field name="area" className="input addHotel__input" />
                      {errors.area && touched.area ? (
                        <div className="input__error">{errors.area}</div>
                      ) : null}
                    </div>

                    <div className="addHotel__input--container addHotel__flex--adress">
                      <label className="label">Adress</label>
                      <Field name="adress" className="input addHotel__input" />
                      {errors.adress && touched.adress ? (
                        <div className="input__error">{errors.adress}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="addHotel__flex">
                    <div className="addHotel__input--container addHotel__flex--description">
                      <label className="label">Short Description</label>
                      <Field
                        name="description"
                        component="textarea"
                        className="input addHotel__input--description"
                      />
                      {errors.description && touched.description ? (
                        <div className="input__error">{errors.description}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="addHotel__subtitle">
                    <h3>Featured</h3>
                    <p className="addHotel__supportingText">
                      Is the hotel featured
                    </p>
                  </div>

                  <div className="addHotel__flex addHotel__checkbox--wrapper">
                    <div className="addHotel__input--container addHotel__flex--details">
                      <label className="label addHotel__checkbox">
                        <Field
                          name="featured"
                          className="input addHotel__input--checkbox"
                          id="checkbox"
                          type="checkbox"
                        />
                        <span>Featured</span>
                      </label>
                    </div>
                  </div>

                  <div className="addHotel__subtitle">
                    <h3>Images</h3>
                    <p className="addHotel__supportingText">
                      Images for a slider, the limit is four
                    </p>
                  </div>

                  <div className="addHotel__flex">
                    <div className="addHotel__input--container addHotel__flex--img">
                      <label className="label">Slider url – one</label>
                      <Field
                        name="slider_img.slider_img1"
                        className="input addHotel__input"
                      />
                    </div>
                    <div className="addHotel__input--container addHotel__flex--img">
                      <label className="label">Image description</label>
                      <Field
                        name="slider_img.slider_img_alt_1"
                        className="input addHotel__input"
                      />
                    </div>
                  </div>
                  <div className="addHotel__flex">
                    <div className="addHotel__input--container addHotel__flex--img">
                      <label className="label">Slider url – two</label>
                      <Field
                        name="slider_img.slider_img_2"
                        className="input addHotel__input"
                      />
                    </div>
                    <div className="addHotel__input--container addHotel__flex--img">
                      <label className="label">Image description</label>
                      <Field
                        name="slider_img.slider_img_alt_2"
                        className="input addHotel__input"
                      />
                    </div>
                  </div>
                  <div className="addHotel__flex">
                    <div className="addHotel__input--container addHotel__flex--img">
                      <label className="label">Slider url – three</label>
                      <Field
                        name="slider_img.slider_img_3"
                        className="input addHotel__input"
                      />
                    </div>
                    <div className="addHotel__input--container addHotel__flex--img">
                      <label className="label">Image description</label>
                      <Field
                        name="slider_img.slider_img_alt_3"
                        className="input addHotel__input"
                      />
                    </div>
                  </div>
                  <div className="addHotel__flex">
                    <div className="addHotel__input--container addHotel__flex--img">
                      <label className="label">Slider url – four</label>
                      <Field
                        name="slider_img.slider_img_4"
                        className="input addHotel__input"
                      />
                    </div>
                    <div className="addHotel__input--container addHotel__flex--img">
                      <label className="label">Image description</label>
                      <Field
                        name="slider_img.slider_img_alt_4"
                        className="input addHotel__input"
                      />
                    </div>
                  </div>

                  <div className="addHotel__subtitle">
                    <h3>About hotel</h3>
                    <p className="addHotel__supportingText">
                      Add more details about the hotel
                    </p>
                  </div>

                  <div className="addHotel__flex">
                    <div className="addHotel__input--container addHotel__flex--about-title">
                      <label className="label">About title</label>
                      <Field
                        name="about_title"
                        className="input addHotel__input"
                      />
                      {errors.about_title && touched.about_title ? (
                        <div className="input__error">{errors.about_title}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="addHotel__flex">
                    <div className="addHotel__input--container addHotel__flex--about">
                      <label className="label">About the hotel</label>
                      <Field
                        name="about"
                        className="input addHotel__input addHotel__textarea"
                        component="textarea"
                      />
                      {errors.about && touched.about ? (
                        <div className="input__error">{errors.about}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="addHotel__flex">
                    <div className="addHotel__input--container addHotel__flex--map">
                      <label className="label">Map url</label>
                      <Field name="map" className="input addHotel__input" />
                      {errors.map && touched.map ? (
                        <div className="input__error">{errors.map}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="addHotel__flex">
                    <div className="addHotel__input--container addHotel__flex--map">
                      <label className="label">Preview image</label>
                      <Field
                        name="hotels_image"
                        className="input addHotel__input"
                      />
                      {errors.hotels_image && touched.hotels_image ? (
                        <div className="input__error">
                          {errors.hotels_image}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="addHotel__subtitle">
                    <h3>Facilities</h3>
                    <p className="addHotel__supportingText">
                      Which fasilities does the hotel have
                    </p>
                  </div>

                  <div className="addHotel__flex addHotel__checkbox--wrapper">
                    <div className="addHotel__input--container addHotel__flex--details">
                      <label className="label addHotel__checkbox">
                        <Field
                          name="teaCoffee_maker"
                          className="input addHotel__input--checkbox"
                          id="checkbox"
                          type="checkbox"
                        />
                        <span>Tea / Coffee maker</span>
                      </label>
                    </div>

                    <div className="addHotel__input--container addHotel__flex--details">
                      <label className="label addHotel__checkbox">
                        <Field
                          name="room_service"
                          className="input addHotel__input--checkbox"
                          id="checkbox"
                          type="checkbox"
                        />
                        <span>Room service</span>
                      </label>
                    </div>

                    <div className="addHotel__input--container addHotel__flex--details">
                      <label className="label addHotel__checkbox">
                        <Field
                          name="gym"
                          className="input addHotel__input--checkbox"
                          id="checkbox"
                          type="checkbox"
                        />
                        <span>Fitness center</span>
                      </label>
                    </div>
                  </div>

                  <div className="addHotel__flex addHotel__checkbox--wrapper">
                    <div className="addHotel__input--container addHotel__flex--details">
                      <label className="label addHotel__checkbox">
                        <Field
                          name="bar"
                          className="input addHotel__input--checkbox"
                          id="checkbox"
                          type="checkbox"
                        />
                        <span>Bar</span>
                      </label>
                    </div>
                    <div className="addHotel__input--container addHotel__flex--details">
                      <label className="label addHotel__checkbox">
                        <Field
                          name="nonSmoking_rooms"
                          className="input addHotel__input--checkbox"
                          id="checkbox"
                          type="checkbox"
                        />
                        <span>Non-smoking rooms</span>
                      </label>
                    </div>
                    <div className="addHotel__input--container addHotel__flex--details">
                      <label className="label addHotel__checkbox">
                        <Field
                          name="breakfast"
                          className="input addHotel__input--checkbox"
                          id="checkbox"
                          type="checkbox"
                        />
                        <span>Breakfast</span>
                      </label>
                    </div>
                  </div>

                  <div className="addHotel__flex addHotel__checkbox--wrapper">
                    <div className="addHotel__input--container addHotel__flex--details">
                      <label className="label addHotel__checkbox">
                        <Field
                          name="private_parking"
                          className="input addHotel__input--checkbox"
                          id="checkbox"
                          type="checkbox"
                        />
                        <span>Private parking</span>
                      </label>
                    </div>
                    <div className="addHotel__input--container addHotel__flex--details">
                      <label className="label addHotel__checkbox">
                        <Field
                          name="restaurant"
                          className="input addHotel__input--checkbox"
                          id="checkbox"
                          type="checkbox"
                        />
                        <span>Restaurant</span>
                      </label>
                    </div>
                    <div className="addHotel__input--container addHotel__flex--details">
                      <label className="label addHotel__checkbox">
                        <Field
                          name="swimming_pool"
                          className="input addHotel__input--checkbox"
                          id="checkbox"
                          type="checkbox"
                        />
                        <span>Swimming pool</span>
                      </label>
                    </div>
                  </div>

                  <div className="addHotel__subtitle">
                    <h3>Costumer reviews</h3>
                    <p className="addHotel__supportingText">
                      Most popular categories from costumer reviews
                    </p>
                  </div>

                  <div className="addHotel__flex addHotel__checkbox--wrapper">
                    <div className="addHotel__input--container addHotel__flex--details">
                      <label className="label addHotel__checkbox">
                        <Field
                          name="location_review"
                          className="input addHotel__input--checkbox"
                          id="checkbox"
                          type="checkbox"
                        />
                        <span>Location</span>
                      </label>
                    </div>

                    <div className="addHotel__input--container addHotel__flex--details">
                      <label className="label addHotel__checkbox">
                        <Field
                          name="comfort"
                          className="input addHotel__input--checkbox"
                          id="checkbox"
                          type="checkbox"
                        />
                        <span>Comfort</span>
                      </label>
                    </div>

                    <div className="addHotel__input--container addHotel__flex--details">
                      <label className="label addHotel__checkbox">
                        <Field
                          name="free_wifi"
                          className="input addHotel__input--checkbox"
                          id="checkbox"
                          type="checkbox"
                        />
                        <span>Free Wifi</span>
                      </label>
                    </div>
                  </div>

                  <div className="addHotel__flex addHotel__checkbox--wrapper">
                    <div className="addHotel__input--container addHotel__flex--details">
                      <label className="label addHotel__checkbox">
                        <Field
                          name="cleanliness"
                          className="input addHotel__input--checkbox"
                          id="checkbox"
                          type="checkbox"
                        />
                        <span>Cleanliness</span>
                      </label>
                    </div>
                    <div className="addHotel__input--container addHotel__flex--details">
                      <label className="label addHotel__checkbox">
                        <Field
                          name="facilities_review"
                          className="input addHotel__input--checkbox"
                          id="checkbox"
                          type="checkbox"
                        />
                        <span>Facilities</span>
                      </label>
                    </div>
                    <div className="addHotel__input--container addHotel__flex--details">
                      <label className="label addHotel__checkbox">
                        <Field
                          name="staff"
                          className="input addHotel__input--checkbox"
                          id="checkbox"
                          type="checkbox"
                        />
                        <span>Staff</span>
                      </label>
                    </div>
                  </div>

                  <div className="addHotel__subtitle">
                    <h3>Rating</h3>
                    <p className="addHotel__supportingText">
                      How many stars does the hotel have
                    </p>
                  </div>

                  <div className="addHotel__flex addHotel__flex--star">
                    {values.stars.map((star, id) => {
                      return (
                        <div
                          className="addHotel__input--container addHotel__label--star"
                          key={id}
                        >
                          <Field
                            id="checkbox"
                            name={`stars.[${id}].star`}
                            className="input addHotel__input--checkbox"
                            type="checkbox"
                          />
                          <p>{id + 1}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="addHotel__submit">
                    <button
                      className="cta__grass addHotel__submit--cta"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </AddHotelWrapper>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddHotel;
