import { useState } from "react";
import { creatId } from "utils/createId";

const defaultTags = [
  { id: creatId(), name: '衣' },
  { id: creatId(), name: '食' },
  { id: creatId(), name: '住' },
  { id: creatId(), name: '行' },
]
export const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
  return { tags, setTags, findTag }
}