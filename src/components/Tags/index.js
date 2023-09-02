import React from "react";
import { styled } from "styled-components";
import tags from "./tags.json";
import TagItem from "./TagItem";

const StyledTagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-bottom: 49px;
`

const StyledTags = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export default function Tags() {
  return (
    <StyledTagsContainer>
      Busque por Tags: 
      <StyledTags>
        {tags.map((tag) => (
          <li key={tag.id}>
            <TagItem>{tag.name}</TagItem>
          </li>
        ))}
      </StyledTags>
    </StyledTagsContainer>
  );
}
