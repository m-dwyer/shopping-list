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
      this.setState({
        list: this.state.list.concat(event.target.value)
      });
    }
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
              return <div className="item">{i}</div>;
            })
          }
        </ol>
      </div>
    );
  }
}

export default App;
