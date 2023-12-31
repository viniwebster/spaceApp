import { txtColor } from "UI/variaveis";
import { SearchContext } from "context/Search/Search";
import React, { useContext } from "react";
import { styled } from "styled-components";

const StyledTag = styled.button`
  display: flex;
  padding: 10px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: none;
  color: ${txtColor};
  background: rgba(217, 217, 217, 0.30);
  cursor: pointer;
`;

export default function TagItem({ children, tag }) {

  const { setTag } = useContext(SearchContext);

  return (
  <StyledTag onClick={() => setTag(tag)}>
    {children}
  </StyledTag>);
}
