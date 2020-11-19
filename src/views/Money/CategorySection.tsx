import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
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

type Category = '-' | '+'
type Props = {
  value: Category,
  onChange: (category: Category) => void
}
const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = { '-': '支出', '+': '收入' }
  const [categoryList] = useState<('-' | '+')[]>(['-', '+'])
  const category = props.value
  return (
    <Wrapper>
      <ul>
        {categoryList.map(item =>
          <li className={category === item ? "select" : ''} key={item} onClick={() => { props.onChange(item) }}>
            {categoryMap[item]}
          </li>
        )}
      </ul>
    </Wrapper >
  )
}

export { CategorySection };