import { all, fork, put, takeLatest } from 'redux-saga/effects';
import * as types from '../../@jumbo/constants/ActionTypes';
import * as actions from '../actions';

function* getSystemRunningNumber({ payload }) {
    try {
        const { objectType } = payload;

        const result = {
            data: {
                objectType: 'Communication',
                objectCode: 'C00000458',
                number: 458,
                isLocked: true,
                lockedByUserId: '364398',
                linkedObjectId: null,
                linkedObjectType: null,
                id: 458,
                isDeleted: false,
                createdUser: '***SYSTEM***',
                createdDateTime: '2021-01-06T17:39:48.123',
                modifiedUser: '***SYSTEM***',
                modifiedDateTime: '2021-01-06T17:39:48.123',
            },
        };

        yield put(
            actions.getSystemRunningNumberSuccess({
                items: result.data,
            }),
        );
    } catch (error) {
        yield put(
            actions.getSystemRunningNumberError({
                error: 'An error occurred when trying to get the request',
            }),
        );
    }
}

// All Watcher
export function* watchGetSystemRunningNumber() {
    yield takeLatest(types.GET_SYSTEM_RUNNING_NUMBER, getSystemRunningNumber);
}

export default function* rootSaga() {
    yield all([fork(watchGetSystemRunningNumber)]);
}
