import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";

const TagSection = styled.section`
  background-color: #fff;
  height: 200px;  
  padding: 10px;
  >ol {
    >li {
      display: inline-block;
      background-color: #D9D9D9;
      margin: 2px 10px;
      padding: 2px 10px;
      border-radius: 8px;
      font-size: 14px;
      color: #666;
    }
  }
  > a {
    margin: 10px 10px;
    border-bottom: 1px solid #666;
    color: #666;
  }
`;
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
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <a>新增标签</a>
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