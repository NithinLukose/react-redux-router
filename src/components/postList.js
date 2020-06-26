import React from 'react'
import Post from "./post";
const PostList = ({posts}) => {

    return(
        <div>
            {posts.map(post=><Post key={post.id} id={post.id} title={post.title} body={post.body} />)}
        </div>
    )

}

export default PostList