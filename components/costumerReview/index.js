import { useState, useEffect } from "react";
import { CostumerReview } from "./costumerReview.style";
import Image from "next/image";

// Iconify
import { Icon } from "@iconify/react";

const CostumerReviewContainer = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:1337/holidazes/");
      const data = await res.json();
      setApi(data);
    }

    getData();
  }, []);

  let randomReview = [];

  if (api) {
    const randomApi = api.sort((a, b) => 0.5 - Math.random());

    for (let i = 0; i < randomApi.length; i++) {
      const elm = randomApi[i];

      randomReview = elm.customer_review;

      if (i === 0) {
        break;
      }
    }
  }

  return (
    <CostumerReview>
      <div className="costumerReview">
        <h3 className="costumerReview__title">What our travelers says</h3>
        <div className="costumerReview__icons">
          <Icon icon="bi:arrow-left-square" color="#57b15b" />
          <Icon icon="bi:arrow-right-square-fill" color="#57b15b" />
        </div>
      </div>

      <div className="costumerReview__wrapper">
        {randomReview.map(({ id, Name, image, country, text_review }) => {
          return (
            <div className="costumerReview__card" key={id}>
              <div className="costumerReview__top--wrapper">
                <Image src={image} alt={Name} className="costumerReview__img" />
                <div>
                  <h4 className="bold costumerReview__name">{Name}</h4>
                  <p className="costumerReview__country">{country}</p>
                </div>
              </div>
              <p className="body-text costumerReview__text">{text_review}</p>
            </div>
          );
        })}
      </div>
    </CostumerReview>
  );
};

export default CostumerReviewContainer;
