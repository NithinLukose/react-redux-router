import React from 'react'

const ParticularPost = ({post}) => {
    let comments = []
    if(post.comments.length>0){
        comments = post.comments
        //console.log(comments)
    }
    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            
            {comments.length>0&&comments.map(comment=><div key={comment.id}>

                <h4>{comment.email}</h4>
                <p>{comment.body}</p>

            </div>)}


        </div>
    )
} 

export default ParticularPost