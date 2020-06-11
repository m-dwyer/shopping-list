import * as actionCreators from './actionCreators.js';

const defaultState = {list: []};
const itemReducer = (state = defaultState, action) => {
  let newState = state;

  switch (action.type) {
    case actionCreators.ADD_ITEM:
      newState = {
        ...state,
        list: [...state.list].concat({key: Date.now().toString(), value: action.item})
      };
      break;
    case actionCreators.DEL_ITEM:
      newState = {
        ...state,
        list: [...state.list].filter(i => i['key'] !== action.key)
      };
      break;
    default:
      break;
  }

  return newState;
};

export { itemReducer };