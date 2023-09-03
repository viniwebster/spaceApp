import React from "react";
import { styled } from "styled-components";
import tags from "./tags.json";
import TagItem from "./TagItem";

const StyledTagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 49px;

    @media screen and (max-width: 500px){
      flex-direction: column;
      justify-content: center;
    }
`

const StyledTags = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
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
