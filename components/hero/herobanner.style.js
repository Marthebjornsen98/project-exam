import styled from "styled-components";
import media from "styled-media-query";

export const HeroBanner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0px auto;
  flex-direction: column;
  justify-content: space-between;

  ${media.lessThan("1054px")`
    align-items: center;
  `}
`;
