import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "views/components/useTags";

const Wrapper = styled.div`
`;

type Params = {
  tagId: string
}
export const Tag: React.FC = () => {
  const { findTag } = useTags()
  const { tagId } = useParams<Params>() // 获取参数
  const tag = findTag(parseInt(tagId))
  return (
    <Wrapper>
      {tag.name}
    </Wrapper>
  ) 
}
