import fetch from 'cross-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_PARTICULAR_POST = 'REQUEST_PARTICULAR_POST'
export const RECEIVE_PARTICULAR_POST =  'RECEIVE_PARTICULAR_POST'
export const REQUEST_PARTICULAR_POST_COMMENT = 'REQUEST_PARTICULAR_POST_COMMENT'
export const RECEIVE_PARTICULAR_POST_COMMENT = 'RECEIVE_PARTICULAR_POST_COMMENT'
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE'
export const NEXT_PAGE = 'NEXT_PAGE'
export const SET_TO_FIRST_PAGE = 'SET_TO_FIRST_PAGE'

const requestPosts = () => ({
    type: REQUEST_POSTS,
})

const receivePosts = (json) => ({
    type: RECEIVE_POSTS,
    posts:json
})

const requestParticularPost = () => ({
    type: REQUEST_PARTICULAR_POST
})

const receiveParticularPost = (json) => ({
    type: RECEIVE_PARTICULAR_POST,
    post: json
})


export const fetchPosts = () => {
    
    return async dispatch => {

        dispatch(requestPosts())
        let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())

        dispatch(receivePosts(res))
    

    }
}

export const fetchParticularPost = (id) => {
    
    return async dispatch => {
        dispatch(requestParticularPost())
        let res1 = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        //console.log(res1)
        let res2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res=>res.json())
        //console.log(res2.length)
        let res = {...res1,comments:res2}
        //console.log(res)
        dispatch(receiveParticularPost(res))       
    }
}

export const previousPage = () => ({
    type: PREVIOUS_PAGE
})

export const nextPage = () => ({
    type: NEXT_PAGE
})

export const setToFirstPage = () => ({
    type: SET_TO_FIRST_PAGE
})
