import { ImgCollage } from "./imgCollage.style";
import Image from "next/image";
import Link from "next/link";

// images
import collageImg1 from "../../public/imgCollage/hotel_breakfast.jpg";
import collageImg2 from "../../public/imgCollage/hotel_restaurant-outside.jpg";
import collageImg3 from "../../public/imgCollage/hotel_restaurant.jpg";
import collageImg4 from "../../public/imgCollage/hotelroom_bed.jpg";
import collageImg5 from "../../public/imgCollage/hotelroom_chairs.jpg";
import collageImg6 from "../../public/imgCollage/hotelroom_tent.jpg";

const Collage = () => {
  return (
    <ImgCollage>
      <h3>Most popular places</h3>
      <div className="imgCollage">
        <div className="imgCollage__image--wrapper hvr-grow">
          <Link href="/hotels" passHref>
            <a>
              <Image
                src={collageImg1}
                alt="Image of one of the most popular places"
                objectFit="cover"
                layout="fill"
                className="imgCollage__image"
              />
            </a>
          </Link>
          <Link href="/hotels" passHref>
            <a>
              <h2 className="imgCollage__place">Oslo</h2>
            </a>
          </Link>
        </div>
        <div className="imgCollage__image--wrapper hvr-grow">
          <Link href="/hotels" passHref>
            <a>
              <Image
                src={collageImg2}
                alt="Image of one of the most popular places"
                objectFit="cover"
                layout="fill"
                className="imgCollage__image"
              />
            </a>
          </Link>
          <Link href="/hotels" passHref>
            <a>
              <h2 className="imgCollage__place">Trondheim</h2>
            </a>
          </Link>
        </div>
        <div className="imgCollage__image--wrapper hvr-grow">
          <Link href="/hotels" passHref>
            <a>
              <Image
                src={collageImg3}
                alt="Image of one of the most popular places"
                objectFit="cover"
                layout="fill"
                className="imgCollage__image"
              />
            </a>
          </Link>
          <Link href="/hotels" passHref>
            <a>
              <h2 className="imgCollage__place">Bergen</h2>
            </a>
          </Link>
        </div>
        <div className="imgCollage__image--wrapper hvr-grow">
          <Link href="/hotels" passHref>
            <a>
              <Image
                src={collageImg4}
                alt="Image of one of the most popular places"
                objectFit="cover"
                layout="fill"
                className="imgCollage__image"
              />
            </a>
          </Link>
          <Link href="/hotels" passHref>
            <a>
              <h2 className="imgCollage__place">Stavanger</h2>
            </a>
          </Link>
        </div>
        <div className="imgCollage__image--wrapper hvr-grow">
          <Link href="/hotels" passHref>
            <a>
              <Image
                src={collageImg5}
                alt="Image of one of the most popular places"
                objectFit="cover"
                layout="fill"
                className="imgCollage__image"
              />
            </a>
          </Link>
          <Link href="/hotels" passHref>
            <a>
              <h2 className="imgCollage__place">Bod??</h2>
            </a>
          </Link>
        </div>
        <div className="imgCollage__image--wrapper hvr-grow">
          <Link href="/hotels" passHref>
            <a>
              <Image
                src={collageImg6}
                alt="Image of one of the most popular places"
                objectFit="cover"
                layout="fill"
                className="imgCollage__image"
              />
            </a>
          </Link>
          <Link href="/hotels" passHref>
            <a>
              <h2 className="imgCollage__place">T??nsberg</h2>
            </a>
          </Link>
        </div>
      </div>
    </ImgCollage>
  );
};

export default Collage;
