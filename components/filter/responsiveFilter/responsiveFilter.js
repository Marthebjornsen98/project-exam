import styled from "styled-components";
import media from "styled-media-query";

export const ResponsiveFilter = styled.div`
  .responsive__modal {
    display: none;
    width: 100%;
    justify-content: flex-end;
    margin-bottom: 40px;

    ${media.lessThan("768px")`
      display: flex;
    `}
  }
`;
