import { TOGGLE_LOADER } from './action-type';

export const toggleLoader = (payload) => {
    return (
        {
            type: TOGGLE_LOADER,
            payload
        }
    )
}