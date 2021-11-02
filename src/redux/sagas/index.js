import { all } from 'redux-saga/effects';
import systemRunningNumber from './SystemRunningNumber';

export default function* rootSaga(getState) {
  yield all([
    systemRunningNumber()
  ]);
}
