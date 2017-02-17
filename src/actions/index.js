import { CALL_API, Schemas } from '../middleware/api';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

const fetchUser  = login => ({
  [CALL_API]:{
    types: [ USER_REQUEST, USER_SUCCESS, USER_FAILURE],
    // hit the login user endpoint
    endpoint: `v1/authenticate ${login}`,
    schema: Schemas.USER
  }
});

export const loadUser = (login, requiredFields = []) => (dispatch, getState) => {
  const user = getState().entities.users[login];
  if(user && requiredFields.every(key => user.hasOwnProperty(key))){
    return null;
  }
  return dispatch(fetchUser(login));
};

export const REPO_REQUEST = 'REPO_REQUEST';
export const REPO_SUCCESS = 'REPO_SUCCESS';
export const REPO_FAILURE = 'REPO_FAILURE';
