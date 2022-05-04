import Image from "next/image";
import { RecomandationWrapper } from "./recomandations.style";

// Images
import CabinHotel from "../../public/assets/cabinHotel.jpg";
import OutsideArea from "../../public/assets/outsideArea.jpg";
import OutsideRestaurant from "../../public/assets/outsideRestaurant.jpg";

// Icons
import bedIcon from "../../public/assets/bed_green.svg";
import personIcon from "../../public/assets/person_icon.svg";
import pinIcon from "../../public/assets/pin_icon.svg";

const Recomandations = () => {
  return (
    <RecomandationWrapper>
      <h3>Our Recomendations</h3>
      <div className="recomendation">
        <div className="recomendation__wrapper">
          <Image
            src={CabinHotel}
            width={660}
            height={490}
            alt="Cabin hotel in the woods with girl on the porch."
            className="recomendation__img"
          />
          <div className="recomendation__icon--wrapper">
            <div className="recomendation__icons">
              <Image src={bedIcon} width={32} height={32} alt="Bed icon" />
              <p className="body-text semi-bold recomendation__icon--text">
                20.06.2022
              </p>
            </div>

            <div className="recomendation__icons">
              <Image src={personIcon} width={32} height={32} alt="Bed icon" />
              <p className="body-text semi-bold recomendation__icon--text">
                2 Pers
              </p>
            </div>

            <div className="recomendation__icons">
              <Image src={pinIcon} width={32} height={32} alt="Bed icon" />
              <p className="body-text semi-bold recomendation__icon--text">
                Bodø
              </p>
            </div>
          </div>
          <div className="recomendation__text--wrapper">
            <h4 className="bold">Remarkable Resort has the best views!</h4>
            <p className="body-text recomendation__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              eget ultrices in massa consequat ultricies. Quis metus in nibh
              lobortis metus in nibh pellenque.
            </p>
            <div className="recomendation__btn--wrapper">
              <div className="cta__sage recomendation__btn">Book room</div>
            </div>
          </div>
        </div>

        <div className="recomendation__wrapper">
          <Image
            src={OutsideRestaurant}
            width={660}
            height={490}
            alt="Cabin hotel in the woods with girl on the porch."
            className="recomendation__img"
          />
          <div className="recomendation__icon--wrapper">
            <div className="recomendation__icons">
              <Image src={bedIcon} width={32} height={32} alt="Bed icon" />
              <p className="body-text semi-bold recomendation__icon--text">
                15.08.2022
              </p>
            </div>

            <div className="recomendation__icons">
              <Image src={personIcon} width={32} height={32} alt="Bed icon" />
              <p className="body-text semi-bold recomendation__icon--text">
                2 Pers
              </p>
            </div>

            <div className="recomendation__icons">
              <Image src={pinIcon} width={32} height={32} alt="Bed icon" />
              <p className="body-text semi-bold recomendation__icon--text">
                Lofoten
              </p>
            </div>
          </div>
          <div className="recomendation__text--wrapper">
            <h4 className="bold">Hotel restaurant with beautiful view!</h4>
            <p className="body-text recomendation__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              eget ultrices in massa consequat ultricies. Quis metus in nibh
              lobortis metus in nibh pellenque.
            </p>
            <div className="recomendation__btn--wrapper">
              <div className="cta__sage recomendation__btn">Book room</div>
            </div>
          </div>
        </div>

        <div className="recomendation__wrapper">
          <Image
            src={OutsideArea}
            width={660}
            height={490}
            alt="Cozy outside area with pillows, lights and wine."
            className="recomendation__img"
          />
          <div className="recomendation__icon--wrapper">
            <div className="recomendation__icons">
              <Image src={bedIcon} width={32} height={32} alt="Bed icon" />
              <p className="body-text semi-bold  recomendation__icon--text">
                22.07.2022
              </p>
            </div>

            <div className="recomendation__icons">
              <Image src={personIcon} width={32} height={32} alt="Bed icon" />
              <p className="body-text semi-bold recomendation__icon--text">
                3 Pers
              </p>
            </div>

            <div className="recomendation__icons">
              <Image src={pinIcon} width={32} height={32} alt="Bed icon" />
              <p className="body-text semi-bold recomendation__icon--text">
                Sortland
              </p>
            </div>
          </div>
          <div className="recomendation__text--wrapper">
            <h4 className="bold">The most cozy back yard!</h4>
            <p className="body-text recomendation__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              eget ultrices in massa consequat ultricies. Quis metus in nibh
              lobortis metus in nibh pellenque.
            </p>
            <div className="recomendation__btn--wrapper">
              <div className="cta__sage recomendation__btn">Book room</div>
            </div>
          </div>
        </div>
      </div>
    </RecomandationWrapper>
  );
};

export default Recomandations;
