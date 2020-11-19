import React from "react";
import { createrOutput } from "./NumberSection/createrOutput";
import { Wrapper } from "./NumberSection/Wrapper";

type Props = {
  value: string,
  onChange: (amount: string) => void
}
const NumberSection: React.FC<Props> = (props) => {
  const output = props.value
  const setOutput = (text: string) => {
    if (text.length > 16) {
      text = text.slice(0, 16)
    }
    props.onChange(text)
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


