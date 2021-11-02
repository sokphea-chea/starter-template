import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from '../../@jumbo/constants/ActionTypes';

// export const fetchSuccess = message => {
//   return dispatch => {
//     dispatch({
//       type: FETCH_SUCCESS,
//       payload: message || '',
//     });
//   };
// };

export const fetchSuccess = (message) => ({
	type: FETCH_SUCCESS,
  payload: message || '',
});

// export const fetchError = error => {
//   return dispatch => {
//     dispatch({
//       type: FETCH_ERROR,
//       payload: error,
//     });
//   };
// };

export const fetchError = (error) => ({
	type: FETCH_ERROR,
  payload: error || '',
});

// export const fetchStart = () => {
//   return dispatch => {
//     dispatch({
//       type: FETCH_START,
//     });
//   };
// };

export const fetchStart = () => ({
	type: FETCH_START
});
