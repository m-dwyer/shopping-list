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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    console.log("handleSubmit: ", e);
    this.addItem();
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleDelete(item) {
    this.deleteItem(item);
  }

  addItem() {
    let newList = Object.assign({}, this.state.list, {[Date.now()]: this.state.inputValue});

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
          <ItemEntry
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            inputValue={this.state.inputValue}
          />
          <ItemsList items={this.state.list} handleDelete={this.handleDelete} />
        </div>
      );
  }
}

class ItemEntry extends React.Component {
  render() {
    return (
      <div id="item-entry">
        <form onSubmit={(e) => this.props.handleSubmit(e)}>
          <input type="text" placeholder="Item" value={this.props.inputValue} onChange={this.props.handleChange} />
          <button id="add-button" type="submit" disabled={this.props.inputValue === ""}>+</button>
        </form>
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
                  <span>{item[1]}</span>
                  <button className="item-delete" onClick={() => this.props.handleDelete(item[0])}>X</button>
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
