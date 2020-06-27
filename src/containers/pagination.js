import {connect} from 'react-redux'
import {previousPage,nextPage} from '../actions'
import Button from '../components/button'


const mapStateToProps = (state,ownProps) => ({
    
    name:ownProps.name
})

const mapDispatchToprops = (dispatch,ownProps) => ({
    onClick: ownProps.name === 'Previous'? ()=>dispatch(previousPage()):()=>dispatch(nextPage())
})
export default connect(mapStateToProps,mapDispatchToprops)(Button)