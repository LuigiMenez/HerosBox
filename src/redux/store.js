import { createStore } from 'redux';

const initialState = {
  user: {
    id: null,
    email: null,
    password: null,
    userName: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return initialState;
    case 'LOGIN':
      return { ...state, user: { ...action.payload } };
    default:
      return state;
  }
};

export default createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
