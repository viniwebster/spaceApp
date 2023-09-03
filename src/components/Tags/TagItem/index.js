import React from "react";
import { styled } from "styled-components";

const StyledTag = styled.div`
  display: flex;
  padding: 10px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.30);
  cursor: pointer;
`;

export default function TagItem({ children }) {
  return (
  <StyledTag>
    {children}
  </StyledTag>);
}
