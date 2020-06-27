import React from 'react'
import Post from "./post";
import Pagination from '../containers/pagination'
const PostList = ({posts,isFetching}) => {

    
    if(isFetching){
        return(
            <div>loading ...</div>
        )
    }
    return(
        <div>
            {posts.map(post=><Post key={post.id} id={post.id} title={post.title} body={post.body} />)}
            <Pagination name="Previous"/>
            <Pagination name="Next"/>
        </div>
    )

}

export default PostList