import React from "react";
import styled from "styled-components";
import { creatId } from "utils/createId";
import { useTags } from "../components/useTags";

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

type Props = {
  value: number[],
  onChange: (tagIds: number[]) => void
}

const TagSection: React.FC<Props> = (props) => {
  const { tags, setTags } = useTags()
  const selectTags = props.value
  const onAddTags = () => {
    const tagName = window.prompt('新标签的名称为');
    if (tagName !== null) {
      return setTags([...tags, { id: creatId(), name: tagName }]);
    }
  };
  const onToggleTag = (tagId: number) => {
    const index = selectTags.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectTags.filter(item => item !== tagId));
    } else {
      props.onChange([...selectTags, tagId]);
    }
  };
  const getClass = (tagId: number) => { return selectTags.indexOf(tagId) >= 0 ? 'selected' : '' };
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={
            () => { onToggleTag(tag.id) }
          } className={getClass(tag.id)}
          >{tag.name}</li>
        )}
      </ol>
      <button onClick={onAddTags}>新增标签</button>
    </Wrapper >
  );
};


export { TagSection };