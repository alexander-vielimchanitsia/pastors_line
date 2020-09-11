import { FETCH_CONTACTS } from '../actions/types';

const initialState = {
  items: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default contactReducer;
