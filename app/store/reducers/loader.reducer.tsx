import { TOGGLE_LOADER } from '../actions/action-type';
import { Action } from '@app/core/models/interface/Action';
const initialState = {
    show: false
}


export default (state = initialState, action: Action) => {
    switch (action.type) {
        case TOGGLE_LOADER:
            return {
                show: action.payload
            };
        default:
            return state;
    }
}