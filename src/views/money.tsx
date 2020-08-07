import React from "react";
import Layout from "components/Layout";
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
const MoneySection = styled.section`
  font-size: 36px;
  line-height: 72px;
  text-align: right;
  padding: 0 10px;
`;
const NumberSection = styled.section`
  >.pad {
    float: left;
    width: 100%;
    >button {
      width: 25%;
      height: 60px;
      font-size: 18px;
      border: none;
      &.ok {
        float: right;
        height: 120px;
      }
      &.zero {
        float: right;
        width: 50%;
      }
      &:nth-child(4),
      &:nth-child(8),
      &:nth-child(12)
      {
        color: #1aad19;
      }
    }
  }
`;

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <TagSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <a href="./Statistics.tsx">新增标签</a>
      </TagSection>
      <NoteSection>
        <span>备注: </span>
        <input type="text" />
      </NoteSection>
      <CategorySection>
        <ul>
          <li className="select">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <MoneySection>
        <span>123</span>
      </MoneySection>
      <NumberSection>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumberSection>
    </MyLayout>
  ) 
}

export default Money;