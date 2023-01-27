import {USER_LOGIN_SUCCESS, USER_LOGOUT} from '../actions/user';

const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return action.user;
    case USER_LOGOUT:
      return null;
    default:
      return state;
  }
};

export default user;
