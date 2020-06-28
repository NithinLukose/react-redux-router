import {connect} from 'react-redux'
import {setToFirstPage} from '../actions'
import HomeButton from '../components/homeButton'

const mapDispatchToProps = (dispatch) => ({

    onClick: () => dispatch(setToFirstPage())

})

export default connect(null,mapDispatchToProps)(HomeButton)
