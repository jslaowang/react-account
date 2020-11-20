import { Button } from "components/Button";
import { Center } from "components/Center";
import Icon from "components/Icon";
import Layout from "components/Layout";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "components/useTags";

const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`
const LabelInput = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  margin: 10px 0;
  >span {
    white-space: nowrap;
    margin: 0 10px;
  }
  >input {
    display: block;
    width: 100%;
    height: 40px;
    border: none;
  }
`
const Span = styled.span`
  color: #666;
`

type Params = {
  tagId: string
}
export const Tag: React.FC = () => {
  const { findTag, updateTags, deleteTag } = useTags()
  const { tagId } = useParams<Params>() // 获取参数
  const id = parseInt(tagId)
  const tag = findTag(id)
  const onChange = (tagName: string) => {
    updateTags({ id, name: tagName })
  }
  const onDeleteTag = (id: number) => {
    deleteTag(id)
  }
  const contentDiv = (tag: { id: number; name: string; }) => {
    return (
      <div>
        <LabelInput>
          <Span>标签名</Span>
          <input type="text" value={tag.name} onChange={e => onChange(e.target.value)} />
        </LabelInput>
        <div>
          <Center>
            <Button onClick={() => onDeleteTag(tag.id)}>删除标签</Button>
          </Center>
        </div>
      </div>
    )
  }
  return (
    <Layout>
      <Navbar>
        <Icon name="left"></Icon>
        <span>编辑标签</span>
        <Icon></Icon>
      </Navbar>
      {tag ? contentDiv(tag): <Center>tag 已删除</Center>}
    </Layout>
  )
}
