import React from "react";
import { styled } from "styled-components";

const StyledImg = styled.div`
  width: 100%;
  height: 158px;
  margin-bottom: 24px;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    border-radius: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default function Image({ src, alt }) {
  return (
    <StyledImg>
      <img src={src} alt={alt} />
    </StyledImg>
  );
}
