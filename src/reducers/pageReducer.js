import { LOAD_PAGE } from '../actions';

const initialData = {};

export const pageReducer = (state = initialData, action) => {
  switch (action.type) {
    case LOAD_PAGE: {
      const { key, data } = action.payload;
      return {
        ...state,
        [key]: data,
      };
    }
    default: {
      return state;
    }
  }
};
