import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
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

const NumberSection: React.FC = () => {
  const [output, _setOutput] = useState('0')
  const setOutput = (text: string) => {
    if (text.length > 16) {
      text = text.slice(0, 16)
    }
    _setOutput(text)
  }
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent
    if (text === null) { return }
    switch (text) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        if (output === '0') {
          setOutput(text)
        } else {
          setOutput(output + text)
        }
        break;
      case '.':
        if (output.indexOf('.') < 0) {
          setOutput(output + text)
        }
        break;
      case '删除':
        if (output.length === 1) {
          setOutput('0')
        } else {
          setOutput(output.slice(0, -1))
        }
        break;
      case '清空':
        setOutput('0')
        break;
      case 'OK':
        console.log(text)
        break;
      default:
        setOutput('0')
    }
  }
  return (
    <Wrapper>
      <div className="money">{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
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
    </Wrapper>
  )
}

export { NumberSection };