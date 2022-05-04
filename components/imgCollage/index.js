import { ImgCollage } from "./imgCollage.style";
import Image from "next/image";
import { useState } from "react";

import collageImg1 from "../../public/imgCollage/hotelRestaurant.jpg";
import collageImg2 from "../../public/imgCollage/classicRoom.jpg";
import collageImg3 from "../../public/imgCollage/beachHotel.png";
import collageImg4 from "../../public/imgCollage/outside_restaurant.jpg";
import collageImg5 from "../../public/imgCollage/hotelRoom_Blue.jpg";
import collageImg6 from "../../public/imgCollage/outsideArea.jpg";

const Collage = () => {
  //   const [isHovering, setIsHovered] = useState(false);
  //   console.log(isHovering);

  return (
    <ImgCollage>
      <h3>Most popular places</h3>
      <div className="imgCollage">
        <div>
          <Image
            src={collageImg1}
            width={410}
            height={300}
            alt="img"
            objectFit="cover"
            className="imgCollage__image"
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
          />
          {/* <div className={`imgCollge__overlay ${isHovering ? "" : "hidden"}`}>
            <h3>Lofoten</h3>
          </div> */}
        </div>

        <Image
          src={collageImg2}
          width={410}
          height={300}
          alt="img"
          objectFit="cover"
          className="imgCollage__image"
        />
        <Image
          src={collageImg3}
          width={530}
          height={300}
          alt="img"
          objectFit="cover"
          className="imgCollage__image"
        />
      </div>
      <div className="imgCollage">
        <Image
          src={collageImg4}
          width={530}
          height={300}
          alt="img"
          objectFit="cover"
          className="imgCollage__image"
        />
        <Image
          src={collageImg5}
          width={410}
          height={300}
          alt="img"
          objectFit="cover"
          className="imgCollage__image"
        />
        <Image
          src={collageImg6}
          width={410}
          height={300}
          alt="img"
          objectFit="cover"
          className="imgCollage__image"
        />
      </div>
    </ImgCollage>
  );
};

export default Collage;
