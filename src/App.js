import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as actionCreators from './actionCreators.js';
import ShoppingList from './components/ShoppingList';
import './App.css';

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

const store = createStore(itemReducer);

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <ShoppingList />
      </Provider>
    </div>
  );
}

export default App;
