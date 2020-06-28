import React from 'react'
import Loading from './loading'


const ParticularPost = ({post}) => {
    
    
    if(post.isFetching){
        return (
            <Loading />
        )
    }
    let comments = []
    if(post.comments.length>0){
        comments = post.comments
        //console.log(comments)
    }
    return(
        <div className="particularPost">

            <div className="post">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                
                <div className="comments">
                    <h4>comments</h4>
                    {comments.length>0&&comments.map(comment=><div key={comment.id} className="comment">

                        <h5>{comment.email}</h5>
                        <p>{comment.body}</p>

                    </div>)}
                </div>

            </div>

        </div>
        
    )
} 

export default ParticularPost