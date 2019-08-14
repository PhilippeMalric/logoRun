import { AuthState } from './auth.models';
import { AuthActions, GET_USER, AUTHENTICATED, NOT_AUTHENTICATED, GOOGLE_LOGIN, AUTH_ERROR, LOGOUT } from './auth.actions';
import { User } from './user.model';

export const initialState: AuthState = {
  isAuthenticated: false,
  loading: false
};

export const defaultUser = new User("","Bob","malric.philippe@gmail.com")

export function authReducer(
  state: AuthState = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {

    case GET_USER:
        return { ...state, loading: true };

    case AUTHENTICATED:
        return { ...state, ...action.payload, loading: false, isAuthenticated:true };

    case NOT_AUTHENTICATED:
        return { ...state, ...defaultUser, loading: false, isAuthenticated:false };

    case GOOGLE_LOGIN:
        return { ...state, loading: true };

    case AUTH_ERROR:
      return { ...state, ...action.payload, loading: false };

    case LOGOUT:
      return { ...state, loading: true, isAuthenticated:false };

    default:
      return state;
  }
}
