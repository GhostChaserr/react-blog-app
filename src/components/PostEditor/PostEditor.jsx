import React, { useContext, useState } from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { DownloadOutlined } from '@ant-design/icons';
import draftToHtml from 'draftjs-to-html'

import { PostsContext } from '../../App'

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import './PostEditor.css';

const { TextArea } = Input;
const PostEditor = () => {
  const [posts, setPosts] = useContext(PostsContext);

  const [title, setTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [postCover, setPostCover] = useState('');
  const [htmlBody, setHtmlBody] = useState('')

  const handlePostBodyChange = (contentState) => {
    const html = draftToHtml(contentState)
    setHtmlBody(html);
  } 

  const handleEditorStateChange = (state) => setPostBody(state);
  const handlePostCoverChange = (e) => setPostCover(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);

  const createPost = () => {
    const post = {
      id: uuidv4(),
      cover: postCover,
      title,
      body: htmlBody,
      likesCount: 0,
    }

    console.log(post);
    setPosts([...posts, post]);
  }
  return (
    <div className="post__editor">
    <div className="post__editor__wrapper">
      <div className="post__form__container">
        <label> Post Cover  </label>
        <Input value={postCover} onChange={handlePostCoverChange} size='large' placeholder="გთხოვთ ჩასვათ სურათის ლინკი" />
      </div>
      <div className="post__form__container">
        <label> Post Title  </label>
        <TextArea
          value={title}
          onChange={handleTitleChange}
          placeholder="გთხოვთ დაწეროთ პოსტის სათაური."
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
      </div>
      <div className="post__form__container">
        <label> Post Body  </label>
        <Editor
          editorState={postBody}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editor__container"
          onContentStateChange={handlePostBodyChange}
          onEditorStateChange={handleEditorStateChange}
        />;
      </div>
      <div className="post__form__container btn__wrapper">
        <Button onClick={createPost} style={{ width: '200px' }} type="primary"size='large'>
          Crete post
        </Button>
      </div>
      </div>
    </div>
  )
}

export default PostEditor