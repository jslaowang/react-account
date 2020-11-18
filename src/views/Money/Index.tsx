import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import { TagSection } from "./TagSection";
import { NoteSection } from "./NoteSection";
import { CategorySection } from "./CategorySection";
import { NumberSection } from "./NumberSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <TagSection>
      </TagSection>
      <NoteSection>
      </NoteSection>
      <CategorySection>
      </CategorySection>
      <NumberSection>
      </NumberSection>
    </MyLayout>
  ) 
}

export default Money;