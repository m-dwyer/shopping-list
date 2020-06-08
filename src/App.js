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
      list: {}
    };

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.addItem(event.target.value);
    }
  }

  handleDelete(event) {
    this.deleteItem(event.target.value);
  }

  addItem(item) {
    let newList = Object.assign({}, this.state.list, {[Date.now()]: item});

    this.setState({
      list: newList
    });
  }

  deleteItem(key) {
    let newList = Object.assign({}, this.state.list);

    if (newList.hasOwnProperty(key)) {
      delete newList[key];
    }

    this.setState({
      list: newList
    });
  }

  render() {
      return (
        <div id="shopping-list">
          <ItemEntry handleKeyUp={this.handleKeyUp} />
          <ItemsList items={this.state.list} handleDelete={this.handleDelete} />
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
            Object.entries(this.props.items).map(i => {
              return (
                <li className="item" key={i[0]}>
                  {i[1]}
                  <button value={i[0]} onClick={(e) => this.props.handleDelete(e)}>Delete</button>
                </li>
              );
            })
          }
        </ol>
      </div>
    );
  }
}

export default App;
