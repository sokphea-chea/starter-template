import {
    INITIAL_SYSTEM_RUNNING_NUMBER,
    GET_SYSTEM_RUNNING_NUMBER,
    GET_SYSTEM_RUNNING_NUMBER_SUCCESS,
    GET_SYSTEM_RUNNING_NUMBER_ERROR,
    RELEASE_SYSTEM_RUNNING_NUMBER,
    RELEASE_SYSTEM_RUNNING_NUMBER_SUCCESS,
    RELEASE_SYSTEM_RUNNING_NUMBER_ERROR
} from '../../@jumbo/constants/ActionTypes';

export const initialSystemRunningNumber = () => ({
	type: INITIAL_SYSTEM_RUNNING_NUMBER
});

export const getSystemRunningNumber = (objectType) => ({
	type: GET_SYSTEM_RUNNING_NUMBER,
    payload: {
        objectType
    }
});

export const getSystemRunningNumberSuccess = ({items}) => ({
	type: GET_SYSTEM_RUNNING_NUMBER_SUCCESS,
	payload: {
		items
	}
});

export const getSystemRunningNumberError = ({error}) => ({
    type: GET_SYSTEM_RUNNING_NUMBER_ERROR,
    payload: {
        error
    }
});

// Release
export const releaseSystemRunningNumber = (objectCode) => ({
	type: RELEASE_SYSTEM_RUNNING_NUMBER,
    payload: {
        objectCode
    }
});

export const releaseSystemRunningNumberSuccess = ({items}) => ({
	type: RELEASE_SYSTEM_RUNNING_NUMBER_SUCCESS,
	payload: {
		items
	}
});

export const releaseSystemRunningNumberError = ({error}) => ({
    type: RELEASE_SYSTEM_RUNNING_NUMBER_ERROR,
    payload: {
        error
    }
});