import React, { useState } from "react";
import { createrOutput } from "./NumberSection/createrOutput";
import { Wrapper } from "./NumberSection/Wrapper";

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
    const newOutput = createrOutput(text, output);
    setOutput(newOutput)
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


