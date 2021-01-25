import { FETCH_IMAGE_LINK_REQUEST, FETCH_IMAGE_LINK_SUCCESS, FETCH_IMAGE_LINK_FAILURE } from "../Constant/Constant";

const InitialState = {
    loading: false,
    ImageLinkArray: [],
    error: ""
}

export const Reducer = (state = InitialState, action)=>{
    switch(action.type){
        case FETCH_IMAGE_LINK_REQUEST: return {
              ...state,
              loading: true
        }
        case FETCH_IMAGE_LINK_SUCCESS : return {
            loading: false,
            ImageLinkArray: action.payload,
           error: ""
        }
        case FETCH_IMAGE_LINK_FAILURE : return {
            loading: false,
            ImageLinkArray: [],
           error: action.payload
        }

        default: return state
    }
    
}