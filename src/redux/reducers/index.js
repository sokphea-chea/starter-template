import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import common from './Common';
import auth from './Auth';
import systemRunningNumber from './SystemRunningNumber';

export default history =>
  combineReducers({
    router: connectRouter(history),
    common: common,
    auth: auth,
    systemRunningNumber: systemRunningNumber
  });
