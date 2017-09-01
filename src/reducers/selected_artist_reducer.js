import {SELECT_ARTIST} from "../actions"

export default function (state = {}, action) {
    switch (action.type){
        case SELECT_ARTIST:
            console.log(action.payload);
            return action.payload;
        default:
            return state
    }
};