import styled from "styled-components";
import media from "styled-media-query";

export const HeroImg = styled.div`
  width: 100vw;
  height: 85vh;
  background-image: url(../backgroundImages/background-image.jpg);
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  ${media.lessThan("582px")`
    background-image: url(../backgroundImages/background-image_tablet.jpg);
    height: 100vh;
  `}
`;
