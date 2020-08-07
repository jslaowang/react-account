import styled from "styled-components";

const CategorySection = styled.section`
  background-color: #c4c4c4;
  font-size: 24px;
  >ul {
    display: flex;
    >li {
      width: 50%;
      padding: 16px 0;
      text-align: center;
      &.select {
        box-shadow: inset 0px -4px 0px 0px rgba(0,0,0,0.75);
      }
    }
  }
`;

export { CategorySection };