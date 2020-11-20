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
  const updateTags = (obj: { id: number, name: string }) => {
    const index = tags.findIndex(tag => tag.id === obj.id)
    const tagsClone = JSON.parse(JSON.stringify(tags)) // 深拷贝
    tagsClone.splice(index, 1, { ...obj })
    setTags(tagsClone)
  }
  const deleteTag = (id: number) => {
    const index = tags.findIndex(tag => tag.id === id)
    const tagsClone = JSON.parse(JSON.stringify(tags)) // 深拷贝
    tagsClone.splice(index, 1)
    setTags(tagsClone)
  }
  return { tags, setTags, findTag, updateTags, deleteTag }
}