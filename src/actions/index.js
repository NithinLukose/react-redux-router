import fetch from 'cross-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

const requestPosts = () => ({
    type: REQUEST_POSTS,
})

const receivePosts = (json) => ({
    type: RECEIVE_POSTS,
    posts:json
})

export const fetchPosts = () => {
    return dispatch => {

        dispatch(requestPosts())
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(res=>dispatch(receivePosts(res)))
    

    }
}