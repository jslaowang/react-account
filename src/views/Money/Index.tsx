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
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: '0'
  })
  return (
    <MyLayout>
      <TagSection value={selected.tags} onChange={(tags: string[]) => setSelected({ ...selected, tags })} />
      <NoteSection value={selected.note} onChange={(note: string) => setSelected({ ...selected, note })}/>
      <CategorySection value={selected.category} onChange={(category: Category) => setSelected({ ...selected, category })}/>
      <NumberSection value={selected.amount} onChange={(amount: string) => setSelected({ ...selected, amount })}/>
    </MyLayout>
  )
}

export default Money;