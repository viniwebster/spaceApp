import { terciaryColor } from 'UI/variaveis'
import React from 'react'
import { styled } from 'styled-components'

const StyledTitle = styled.h2`
    font-size: 2rem;
    color: ${terciaryColor};
    margin-bottom: 24px;
`

export default function Title({ children }) {
  return (
    <StyledTitle>{children}</StyledTitle>
  )
}
