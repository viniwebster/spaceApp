import React from 'react';
import { styled } from 'styled-components';
import { secondaryColor, terciaryColor, txtColor, txtMd } from '../../UI/variaveis';
import { ReactComponent as IconSearch} from './search.svg'

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 570px;

    padding: 12px 1rem;
    border-radius: 10px;
    border: 2px solid ${terciaryColor, secondaryColor};
    background-color: transparent;

    @media screen and (max-width: 768px){
        width: 426px;
    }

    @media screen and (max-width:  400px){
        width: 100%;
    }
`

const StyledInput = styled.input`
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${txtColor};
    font-size: ${txtMd};

    &::placeholder{
        font-size: ${txtMd};
        color: ${txtColor};
    }
`

export default function Input({ type = 'text', placeholder }) {
  return (
    <StyledDiv>
        <StyledInput type={type} placeholder={placeholder} />
        <IconSearch />
    </StyledDiv>
  )
}
