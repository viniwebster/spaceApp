import Title from 'components/Title';
import React from 'react';
import { styled } from 'styled-components';
import popular from './popular.json';
import Image from './Images';

const StyledPopular = styled.div`
    display: flex;
    flex-direction: column;
    width: 212px;
`

export default function Popular() {
  return (
    <StyledPopular>
        <Title>
            Populares
        </Title>
        {popular.map(item => <Image src={item.img} />)}
    </StyledPopular>
  )
}
