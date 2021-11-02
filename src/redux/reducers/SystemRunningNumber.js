import {
    INITIAL_SYSTEM_RUNNING_NUMBER,
    GET_SYSTEM_RUNNING_NUMBER,
    GET_SYSTEM_RUNNING_NUMBER_SUCCESS,
    GET_SYSTEM_RUNNING_NUMBER_ERROR,
    RELEASE_SYSTEM_RUNNING_NUMBER,
    RELEASE_SYSTEM_RUNNING_NUMBER_SUCCESS,
    RELEASE_SYSTEM_RUNNING_NUMBER_ERROR,
  } from '../../@jumbo/constants/ActionTypes';

const INITIAL_STATE = {
    loader: false,
    alertMessage: '', //  Text Message popup
    showMessage: false, // if Message popup should show
    isSuccessMessage: false, // use with message popup
    ticketNumber: ''
};

export default function systemRunningNumber(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_SYSTEM_RUNNING_NUMBER_SUCCESS:{
            return {
                ...state,
                loader: false,
                ticketNumber: action.payload.items.objectCode
            }
        }
        case GET_SYSTEM_RUNNING_NUMBER_ERROR:{
            return {
                ...state,
                loader: false,
                showMessage: true,
                alertMessage: action.payload.error
            }
        }
        case RELEASE_SYSTEM_RUNNING_NUMBER_SUCCESS:{
            return {
                ...state,
                loader: false
            }
        }
        case RELEASE_SYSTEM_RUNNING_NUMBER_ERROR:{
            return {
                ...state,
                loader: false,
                showMessage: true,
                alertMessage: action.payload.error
            }
        }
        default: {
            return state;
        }
    }
}