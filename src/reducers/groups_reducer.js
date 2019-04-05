import {
    GET_GROUPS,
    GET_GALLERY,
    GET_SEARCH_TEXT,
    ADD_VALUE
} from '../actions/types';
 

export default function(state={},action){
    switch(action.type){
        case GET_GROUPS:
            return action.payload

        case GET_GALLERY:
            return action.payload

        case GET_SEARCH_TEXT:
            return action.payload  
            
        case ADD_VALUE:
            return action.payload
       
        default:
            return state;
    }
}