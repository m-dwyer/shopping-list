import React from 'react';
import ItemEntry from './ItemEntry.js';
import ItemsList from './ItemsList.js';

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

  export default ShoppingList;