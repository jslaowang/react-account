import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.333%;
      text-align: center;
      padding: 4px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="tag"></Icon>
          <Link to="/tags">标签页111</Link>
        </li>
        <li>
          <Icon name="money"></Icon>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <Icon name="chart"></Icon>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;