import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #fff;
  padding: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  >ol {
    >li {
      display: inline-block;
      background-color: #D9D9D9;
      margin: 2px 10px;
      padding: 2px 10px;
      border-radius: 18px;
      font-size: 14px;
      color: #666;
      &.selected {
        color: #1aad19;
      }
    }
  }
  >button {
    margin: 20px 10px;
    border: none;
    border-bottom: 1px solid #666;
    color: #666;
  }
`;

const TagSection: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const [selectTags, setSelectTags] = useState<string[]>([]);
  const onAddTags = () => {
    const tagName = window.prompt('新标签的名称为');
    if (tagName !== null) {
      return setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectTags.indexOf(tag);
    if (index >= 0) {
      setSelectTags(selectTags.filter(item => item !== tag));
    } else {
      setSelectTags([...selectTags, tag]);
    }
  };
  const getClass = (tag: string) => { return selectTags.indexOf(tag) >= 0 ? 'selected' : '' };
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag} onClick={
            () => { onToggleTag(tag) }
          } className={getClass(tag)}
          >{tag}</li>
        )}
      </ol>
      <button onClick={onAddTags}>新增标签</button>
    </Wrapper >
  );
};


export { TagSection };