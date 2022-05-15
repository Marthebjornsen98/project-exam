import styled from "styled-components";
import media from "styled-media-query";

export const HeroImg = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(../backgroundImages/background-image.jpg);
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;

  ${media.lessThan("1054px")`
    background-image: url(../backgroundImages/background-image_tablet.jpeg);
    background-position: center;
  `}
`;
