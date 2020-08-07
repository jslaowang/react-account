import styled from "styled-components";

const NoteSection = styled.section`
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

export { NoteSection };