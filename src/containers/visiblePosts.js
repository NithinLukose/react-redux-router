import {connect} from 'react-redux'
import PostLists from '../components/postList'

const mapStateToProps = (state) => {
    //console.log(state.posts.items)
    const indexOfLastPost = state.posts.currentPage*state.posts.postsPerPage
    const indexOfFirstPost = indexOfLastPost - state.posts.postsPerPage
    const currentPosts = state.posts.items.slice(indexOfFirstPost,indexOfLastPost)
    
    return {
        posts:currentPosts,
        isFetching:state.posts.isFetching
    }
}

export default connect(mapStateToProps)(PostLists)