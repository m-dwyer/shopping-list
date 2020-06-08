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

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.addItem(event.target.value);
    }
  }

  addItem(item) {
    let newItem = {
      key: Date.now(),
      text: item
    };

    this.setState({
      list: this.state.list.concat(newItem)
    });
  }

  render() {
      return (
        <div id="shopping-list">
          <ItemEntry handleKeyUp={this.handleKeyUp} />
          <ItemsList items={this.state.list} />
        </div>
      );
  }
}

class ItemEntry extends React.Component {
  render() {
    return (
      <div id="item-entry">
        <input type="text" placeholder="Item" onKeyUp={(e) => this.props.handleKeyUp(e)} />
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
              return <li className="item" key={i['key']}>{i['text']}</li>;
            })
          }
        </ol>
      </div>
    );
  }
}

export default App;
