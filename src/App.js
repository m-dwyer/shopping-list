import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <ShoppingList />
    </div>
  );
}

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  render() {
      return (
        <div id="shopping-list">
          <ItemEntry />
          <ItemsList items={this.state.list} />
        </div>
      );
  }
}

class ItemEntry extends React.Component {
  render() {
    return (
      <div id="item-entry">
        <input type="text" value="Item" />
      </div>
    );
  }
}

class ItemsList extends React.Component {
  render() {
    return (
      <div id="items">
        <ol>
          {
            this.props.items.map(i => {
              return <div className="item">{i}</div>;
            })
          }
        </ol>
      </div>
    );
  }
}

export default App;
