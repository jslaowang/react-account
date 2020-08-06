import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";

const TagSection = styled.section`
  background-color: #ccc;
`;
const NoteSection = styled.section`
  background-color: #cebbff;
`;
const CategorySection = styled.section`
  background-color: #bbecff;
`;
const MoneySection = styled.section`
  background-color: yellow;
`;
const NumberSection = styled.section`
  background-color: green;
`;

function Money() {
  return (
    <Layout>
      <TagSection>
        <button>衣</button>
        <button>食</button>
        <button>住</button>
        <button>行</button>
        <button>新增标签</button>
      </TagSection>
      <NoteSection>
        <span>备注: </span>
        <input type="text" />
      </NoteSection>
      <CategorySection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <MoneySection>
        <span>123</span>
      </MoneySection>
      <NumberSection>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
      </NumberSection>
    </Layout>
  ) 
}

export default Money;