import React from 'react'
import Post from "./post";
import Pagination from '../containers/pagination'
import Loading from './loading'
const PostList = ({posts,isFetching,currentPage}) => {

    
    if(isFetching){
        return(
            <Loading />
        )
    }
    return(

        <>
            <div className="pagination">
                <Pagination class="previous" name="Previous"/> 
                
                <Pagination class="next" name="Next"/>
            </div>
            <div className="posts">
                
                
                {posts.map(post=><Post key={post.id} id={post.id} title={post.title} body={post.body} />)}
                
                
            </div>
            <div className="pagination">
                <Pagination class="previous" name="Previous"/> 
                
                <Pagination class="next" name="Next"/>
            </div>
        </>

    )

}

export default PostList