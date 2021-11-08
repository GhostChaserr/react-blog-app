import React from 'react'
import PostEditor from '../../components/PostEditor'


const post = {
  id: 1,
  cover: "cover image",
  title: "satauri",
  body: "body content",
  likesCount: 0,
}

const Post = () => {
  return (
    <div>
      <PostEditor />
    </div>
  )
}

export default Post