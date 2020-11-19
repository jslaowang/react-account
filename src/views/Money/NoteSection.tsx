import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  >span {
    white-space: nowrap;
    margin: 0 10px;
  }
  >input {
    display: block;
    width: 100%;
    height: 70px;
    border: none;
    background-color: #f5f5f5;
  }
`;

type Props = {
  value: string,
  onChange: (note: string) => void
}

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value
  return (
    <Wrapper>
      <span>备注: </span>
      <input type="text" placeholder="在这里添加备注" value={note} onChange={(e) => props.onChange(e.target.value)} />
    </Wrapper>
  )
}

export { NoteSection };