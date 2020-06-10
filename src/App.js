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
      inputValue: '',
      list: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.addItem(event.target.value);
    }
  }

  handleDelete(item) {
    this.deleteItem(item);
  }

  addItem(item) {
    let newList = Object.assign({}, this.state.list, {[Date.now()]: item});

    this.setState({
      inputValue: '',
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
          <ItemEntry handleKeyUp={this.handleKeyUp} handleChange={this.handleChange} inputValue={this.state.inputValue} />
          <ItemsList items={this.state.list} handleDelete={this.handleDelete} />
        </div>
      );
  }
}

class ItemEntry extends React.Component {
  render() {
    return (
      <div id="item-entry">
        <input type="text" placeholder="Item" value={this.props.inputValue} onKeyUp={(e) => this.props.handleKeyUp(e)} onChange={this.props.handleChange} />
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
            Object.entries(this.props.items).map((item, idx) => {
              return (
                <li className="item" key={item[0]}>
                  {item[1]}
                  <button onClick={() => this.props.handleDelete(item[0])}>X</button>
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
