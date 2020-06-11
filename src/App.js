import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { itemReducer } from './reducers.js';
import ShoppingList from './components/ShoppingList';
import './App.css';

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
