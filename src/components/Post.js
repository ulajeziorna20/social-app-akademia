import "./Post.css"
import { useState } from "react"

const Post = (props) => {
  const [likeCount, setLikeCount] = useState(props.post.likes.length)

  return (
    <div className="post">
      <div className="avatar">
        <img src={props.post.user.avatar_url} alt={props.post.user.username} />
      </div>
      <div className="postData">
        <div className="postMeta">
          <div className="author">{props.post.user.username}</div>
          <div className="author">{props.post.created_at.substring(0, 10)}</div>
        </div>
        <div className="postContent">{props.post.content}</div>
        <div className="likes">{likeCount}</div>
      </div>
    </div>
  )
}

export default Post
