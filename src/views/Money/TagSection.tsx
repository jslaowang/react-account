import styled from "styled-components";

const TagSection = styled.section`
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
    }
  }
  >a {
    margin: 20px 10px;
    border-bottom: 1px solid #666;
    color: #666;
  }
`;

export { TagSection };