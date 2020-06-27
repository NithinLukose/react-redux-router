import {REQUEST_POSTS,RECEIVE_POSTS,PREVIOUS_PAGE,NEXT_PAGE } from '../actions'

const posts = (state={
    isFetching: false,
    items:[],
    postsPerPage:10,
    currentPage:1,
    totalPage:1
},action) => {
    
    let newPage = 0;
    switch(action.type){
        case REQUEST_POSTS:
            return {...state,isFetching:true}
        case RECEIVE_POSTS:
            return {...state,isFetching:false,items:action.posts,totalPage:Math.ceil(action.posts.length/state.postsPerPage)}

        case PREVIOUS_PAGE:
            newPage = state.currentPage!==1?state.currentPage-1:state.currentPage
            return {...state,currentPage:newPage}
        
        case NEXT_PAGE:
            newPage = state.currentPage!==state.totalPage?state.currentPage+1:state.currentPage
            return {...state,currentPage:newPage}
        default:
            return state
    }

}

export default posts