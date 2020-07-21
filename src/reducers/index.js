import { combineReducers } from 'redux';
import { editorReducer } from './editorReducer';
import { pageReducer } from './pageReducer';

export const rootReducer = combineReducers({
  editor: editorReducer,
  pages: pageReducer,
});
