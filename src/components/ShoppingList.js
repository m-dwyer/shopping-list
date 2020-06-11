import React from 'react';
import * as actionCreators from '../actionCreators.js';
import { connect } from 'react-redux';
import ItemEntry from './ItemEntry.js';
import ItemsList from './ItemsList.js';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    this.addItem();
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value })
  }

  handleDelete(item) {
    this.deleteItem(item);
  }

  addItem() {
    this.props.addItem(this.state.inputValue);
    this.setState({ inputValue: '' });
  }

  deleteItem(key) {
    this.props.deleteItem(key);
    this.setState({ inputValue: '' });
  }

  render() {
    return (
      <div id="shopping-list">
        <ItemEntry
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue}
        />
        <ItemsList items={this.props.list} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(actionCreators.addItem(item)),
    deleteItem: (key) => dispatch(actionCreators.delItem(key))
  };
};

const ConnectedShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList);

export default ConnectedShoppingList;