import React, { useContext } from 'react'
import { Button, Card } from 'antd';
import { PostsContext } from '../../App'
import './Home.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png

// https://i.ibb.co/hXZBQBN/hamburg-4570577.jpg

const { Meta } = Card;
const PostDetail = ({ post }) => {
  const [posts, setPosts] = useContext(PostsContext);  
  const handlePostClickCount = () => {
    const updated = posts.map(currentPost => {
      if (currentPost.id === post.id) {
        return {
          ...currentPost,
          likesCount: currentPost.likesCount + 1,
        }
      } else {
        return currentPost;
      }
    })
    setPosts(updated);
  }
  return (
    <div className="post___detail">
      <Card
        hoverable
        style={{ width: 600 }}
        cover={
        <LazyLoadImage
          alt={'image'}
          height={600}
          src={post.cover} // use normal <img> attributes as props
          width={600} 
        />
        }
      >
        <div className="post__title">
          <div className="title__wrapper">
            {post.title}
          </div>
          <div className="like__wrapper">
            {post.likesCount === 0 && (
              <Button onClick={handlePostClickCount} type='primary' size='large'> No Likes yet </Button>
            )}
            {post.likesCount > 0 && (
              <Button onClick={handlePostClickCount} size='large' type='primary'> Total Likes: {post.likesCount}</Button>
            )}
          </div>
        </div>
        <div className="body__wrapper">
          <div dangerouslySetInnerHTML={{ __html: post.body }}>
          </div>
        </div>
      </Card>
    </div>
  )
}

const Home = () => {
  const [posts] = useContext(PostsContext);
  // if (posts.length === 0) return <p> No posts! </p>

  console.log(posts)

  return (
    <div className="posts__wrapper">
      <div className="posts__container">
        <p className="latest__posts"> Latest posts </p>
        {posts.map((post, index) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  )
}

export default Home