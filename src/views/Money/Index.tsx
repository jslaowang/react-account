import React, { useState } from "react";
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

type Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: '0'
  })
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({ ...selected, ...obj })
  }
  return (
    <MyLayout>
      <TagSection value={selected.tagIds} onChange={tagIds => onChange({ tagIds })} />
      <NoteSection value={selected.note} onChange={note => onChange({ note })} />
      <CategorySection value={selected.category} onChange={category => onChange({ category })} />
      <NumberSection value={selected.amount} onChange={amount => onChange({ amount })} />
    </MyLayout>
  )
}

export default Money;