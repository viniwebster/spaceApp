import { txtMd } from "../../UI/variaveis";
import React from "react";
import { styled } from "styled-components";
import itens from "./itens.json";

const StyledAside = styled.aside`
  width: 212px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 22px;

  font-size: ${txtMd};

  &:hover{
    cursor: pointer;
  }
`;

export default function Aside() {
  return (
    <StyledAside>
      <StyledList>
        {itens.map((item) => (
          <StyledListItem key={item.id}>
              <img src={item.icon} alt={item.tag} />
              <p>{item.tag}</p>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledAside>
  );
}
