import React from 'react'
import {Link} from 'react-router-dom'


const Post = ({id,title,body}) => {

    return (

        <div>

            <Link to={`/posts/${id}`}><h3>{title}</h3></Link>
            <p>{body}</p>

        </div>

    )

}

export default Post