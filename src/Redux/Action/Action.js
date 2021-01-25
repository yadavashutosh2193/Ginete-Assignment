import axios from "axios";
import { FETCH_IMAGE_LINK_REQUEST, FETCH_IMAGE_LINK_SUCCESS, FETCH_IMAGE_LINK_FAILURE } from "../Constant/Constant";

export const FetchImageLinks = ()=>{
    return {
        type: FETCH_IMAGE_LINK_REQUEST
    }
}

export const FetchImageLinkSuccess = (data)=>{
    return {
        type: FETCH_IMAGE_LINK_SUCCESS,
        payload: data
    }
}
export const FetchImageLinkFailure = (error)=>{
    return {
        type: FETCH_IMAGE_LINK_FAILURE,
        payload: error
    }
}

export const FetchImages = ()=>{
    return (dispatch) => {
        dispatch(FetchImageLinks());
        axios.get("https://api.holidu.com/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien")
        .then(response => {
            const offers = response.data.offers;
            dispatch(FetchImageLinkSuccess(offers));
        }).catch(error=>{
            const ErrMsg = error.message;
            dispatch(FetchImageLinkFailure(ErrMsg));
        })
}
}