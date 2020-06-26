import {
    REQUEST_PARTICULAR_POST,
    RECEIVE_PARTICULAR_POST,
} from '../actions'

const post = (state={
    id:0,
    title:'',
    body:'',
    comments:[]
},action) => {

    switch(action.type){

        case REQUEST_PARTICULAR_POST:
            return state
        
        case RECEIVE_PARTICULAR_POST:
            return {
                ...state,
                id:action.post.id,
                title:action.post.title,
                body:action.post.body,
                comments:action.post.comments
            }
        default : 
            return state

    }

}

export default post