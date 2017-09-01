import {FETCH_ARTISTS} from "../actions/index";
import _ from 'lodash';

export default function (state = {}, action) {

    switch (action.type){
        case FETCH_ARTISTS:
            console.log(action.payload.data);
            return action.payload.data;
        default:
            return state;
    }


};