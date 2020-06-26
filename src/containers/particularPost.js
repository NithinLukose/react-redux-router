
import {connect} from 'react-redux'

import ParticularPost from '../components/particularPost'




const mapStateToProps = (state) => ({
    post:state.post
})
export default connect(mapStateToProps)(ParticularPost)