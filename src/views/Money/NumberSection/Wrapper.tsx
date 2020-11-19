import styled from "styled-components";

export const Wrapper = styled.section`
  >.money {
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 10px;
  }
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
