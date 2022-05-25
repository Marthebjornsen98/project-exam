import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Styles
import { RecomandationWrapper } from "./recomandations.style";

// Icons
import bedIcon from "../../public/icons/bed_green.svg";
import personIcon from "../../public/icons/person_icon.svg";
import pinIcon from "../../public/icons/pin_icon.svg";

const Recomandations = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:1337/holidazes/");
      const data = await res.json();
      setApi(data);
    }

    getData();
  }, []);

  return (
    <RecomandationWrapper>
      <h3>Our Recomendations</h3>
      <div className="recomendation">
        {api.map(({ id, title, hotels_image, featured, description }) => {
          const myLoader = () => {
            return hotels_image;
          };

          if (featured) {
            return (
              <div className="recomendation__wrapper" key={id}>
                <Image
                  width={660}
                  height={490}
                  src={hotels_image}
                  loader={myLoader}
                  className="recomendation__img"
                  alt="Cabin hotel in the woods with girl on the porch."
                />

                <div className="recomendation__description">
                  <div className="recomendation__icon--wrapper">
                    <div className="recomendation__icons">
                      <Image
                        src={bedIcon}
                        width={32}
                        height={32}
                        alt="Bed icon"
                      />
                      <p className="body-text semi-bold recomendation__icon--text">
                        20.06.2022
                      </p>
                    </div>

                    <div className="recomendation__icons">
                      <Image
                        src={personIcon}
                        width={32}
                        height={32}
                        alt="Person icon"
                      />
                      <p className="body-text semi-bold recomendation__icon--text">
                        2 Pers
                      </p>
                    </div>

                    <div className="recomendation__icons">
                      <Image
                        src={pinIcon}
                        width={32}
                        height={32}
                        alt="Pin icon"
                      />
                      <p className="body-text semi-bold recomendation__icon--text">
                        Bodø
                      </p>
                    </div>
                  </div>
                  <div className="recomendation__text--wrapper">
                    <h4 className="bold">{title}</h4>
                    <p className="body-text recomendation__text">
                      {description}
                    </p>
                    <Link href={"/hotelDetails/" + id} passHref>
                      <a className="recomendation__btn--wrapper">
                        <button className="cta__sage recomendation__btn">
                          Book room
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </RecomandationWrapper>
  );
};

export default Recomandations;
