import {connect} from 'react-redux'
import PostLists from '../components/postList'

const mapStateToProps = (state) => ({

    posts: state.posts.items

})

export default connect(mapStateToProps)(PostLists)