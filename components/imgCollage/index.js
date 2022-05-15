import { ImgCollage } from "./imgCollage.style";
import Image from "next/image";
import { useEffect, useState } from "react";

// images
import collageImg1 from "../../public/imgCollage/hotelRestaurant.jpg";
import collageImg2 from "../../public/imgCollage/classicRoom.jpg";
import collageImg3 from "../../public/imgCollage/beachHotel.png";
import collageImg4 from "../../public/imgCollage/outside_restaurant.jpg";
import collageImg5 from "../../public/imgCollage/hotelRoom_Blue.jpg";
import collageImg6 from "../../public/imgCollage/outsideArea.jpg";

const Collage = () => {
  const [isHovered, setIsHovered] = useState();

  return (
    <ImgCollage>
      <h3>Most popular places</h3>
      <div className="imgCollage">
        <div className="imgCollage__image--wrapper">
          {isHovered ? (
            <Image
              src={collageImg1}
              alt="Image of one of the most popular places"
              objectFit="cover"
              layout="fill"
              className="imgCollage__image"
            />
          ) : (
            <div className="imgCollage__overlay">
              <h3>Lofoten</h3>
              <Image
                src={collageImg1}
                alt="Image of one of the most popular places"
                objectFit="cover"
                layout="fill"
                className="imgCollage__image"
              />
            </div>
          )}
        </div>
        <div className="imgCollage__image--wrapper">
          <Image
            src={collageImg2}
            alt="Image of one of the most popular places"
            objectFit="cover"
            layout="fill"
            className="imgCollage__image"
          />
        </div>
        <div className="imgCollage__image--wrapper">
          <Image
            src={collageImg3}
            alt="Image of one of the most popular places"
            objectFit="cover"
            layout="fill"
            className="imgCollage__image"
          />
        </div>
        <div className="imgCollage__image--wrapper">
          <Image
            src={collageImg4}
            alt="Image of one of the most popular places"
            objectFit="cover"
            layout="fill"
            className="imgCollage__image"
          />
        </div>
        <div className="imgCollage__image--wrapper">
          <Image
            src={collageImg5}
            alt="Image of one of the most popular places"
            objectFit="cover"
            layout="fill"
            className="imgCollage__image"
          />
        </div>
        <div className="imgCollage__image--wrapper">
          <Image
            src={collageImg6}
            alt="Image of one of the most popular places"
            objectFit="cover"
            layout="fill"
            className="imgCollage__image"
          />
        </div>
      </div>
    </ImgCollage>
  );
};

export default Collage;
