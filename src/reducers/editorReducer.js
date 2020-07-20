import {
  SET_DRAGGED_WORD,
  MOVE_WORD,
  ROTATE_COLOR,
  TOGGLE_WORD,
} from '../actions';
const colors = ['#DB4437', '#4285F4', '#0F9D58', '#F4B400', '#FFFFFF'];
const initialState = {
  words: {
    hello: {
      top: 20,
      left: 30,
      isHidden: false,
      color: colors[0],
      colorIndex: 0,
    },
    good: {
      top: 30,
      left: 30,
      isHidden: false,
      color: colors[0],
      colorIndex: 0,
    },
    world: {
      top: 40,
      left: 30,
      isHidden: false,
      color: colors[0],
      colorIndex: 0,
    },
    cool: {
      top: 50,
      left: 30,
      isHidden: false,
      color: colors[0],
      colorIndex: 0,
    },
    rad: {
      top: 60,
      left: 30,
      isHidden: false,
      color: colors[0],
      colorIndex: 0,
    },
  },
  draggedWord: undefined,
};

export const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_WORD: {
      const { key, top, left } = action.payload;
      const { words } = state;
      const word = words[key];
      return {
        ...state,
        words: {
          ...words,
          [key]: { ...word, top, left, isHidden: false },
        },
        draggedWord: undefined,
      };
    }
    case SET_DRAGGED_WORD: {
      const { key } = action.payload;
      const { words } = state;
      const word = words[key];
      return {
        ...state,
        words: {
          ...words,
          [key]: {
            ...word,
            isHidden: true,
          },
        },
        draggedWord: key,
      };
    }
    case ROTATE_COLOR: {
      const { key, colorIndex } = action.payload;
      const newIndex = (colorIndex + 1) % colors.length;
      const { words } = state;
      const word = words[key];
      return {
        ...state,
        words: {
          ...words,
          [key]: {
            ...word,
            colorIndex: newIndex,
            color: colors[newIndex],
          },
        },
      };
    }
    case TOGGLE_WORD: {
      const { key } = action.payload;
      const { words } = state;
      const word = words[key];
      return {
        ...state,
        words: {
          ...words,
          [key]: {
            ...word,
            isHidden: !word.isHidden,
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};
