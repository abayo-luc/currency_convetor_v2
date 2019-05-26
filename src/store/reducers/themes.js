import { CHANGE_PRIMARY_COLOR } from '../types';

const INITIAL_STATE = {
  primaryColor: '#4F697A'
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: payload
      };
    default:
      return state;
  }
};
