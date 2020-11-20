import React from "react";
import Layout from "components/Layout";
import Icon from "components/Icon";
import { useTags } from "./useTags"
import styled from "styled-components";

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li{
    border-bottom: 1px solid #d5d5d9;
    padding: 12px 16px 12px 0;
    margin-left: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const Button = styled.button`
  font-size: 16px;
  padding: 12px 20px;
  color: white;
  background: #1aad19;
  border: 1px solid #1aad19;
  border-radius: 4px;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

function Tags() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tags, setTags } = useTags()
  return (
    <Layout>
      <TagList>
        {
          tags.map(tag =>
            <li key={tag}>
              <span>{tag}</span>
              <Icon name="right" />
            </li>
          )
        }
      </TagList>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  )
}

export default Tags;