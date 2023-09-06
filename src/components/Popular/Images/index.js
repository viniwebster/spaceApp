import React from 'react';
import { styled } from 'styled-components';

const StyledImg = styled.div`
    width: 212px;
    height: 158px;

    img{
        width: 100%;
        border-radius: 20px;
    }
`

export default function Image({ src, alt }) {
  return (
    <StyledImg>
        <img src={src} alt={alt}/>
    </StyledImg>
  )
}
