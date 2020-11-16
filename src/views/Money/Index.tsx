import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import { TagSection } from "./TagSection";
import { NoteSection } from "./NoteSection";
import { CategorySection } from "./CategorySection";
import { NumberSection } from "./NumberSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <TagSection>
      </TagSection>
      <NoteSection>
      </NoteSection>
      <CategorySection>
        <ul>
          <li className="select">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberSection>
        <div className="money">123</div>
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